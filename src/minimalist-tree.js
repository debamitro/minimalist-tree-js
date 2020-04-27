function MinimalistTree (container)
{
    return {
        draw : (getroots, getchildren) => expandOrCollapseNodes (container, getroots(), getchildren)
    }
}

function addNode (parent, node, getchildren)
{
    var li = document.createElement ('li');

    li.appendChild (document.createTextNode (node));

    const children = getchildren (node);
    if (children != null && children.length > 0)
    {
        li.addEventListener ('click', (e) => {
            expandOrCollapseNodes (li, children, getchildren);
            e.stopPropagation ();
        });
    }
    else
    {
        li.addEventListener ('click', (e) => e.stopPropagation ());
    }

    parent.appendChild (li);
}

function expandOrCollapseNodes (parent, nodes, getchildren)
{
    var existingUls = parent.getElementsByTagName ('ul');
    if (existingUls.length > 0)
    {
        // Toggle the state
        var styles = window.getComputedStyle (existingUls.item(0));
        if (styles.getPropertyValue ('display') == 'none')
        {
            existingUls.item(0).setAttribute ('style', 'display:block');
        }
        else
        {
            existingUls.item(0).setAttribute ('style', 'display:none');
        }
        return;
    }

    // Create a new list for the nodes
    var ul = document.createElement ('ul');
    nodes.forEach ( (node) => {
        addNode (ul, node, getchildren);
    });
    parent.appendChild (ul);
}
