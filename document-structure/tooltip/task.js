const tooltipElements = document.querySelectorAll('.has-tooltip');

tooltipElements.forEach(tooltipElement => {
    tooltipElement.addEventListener('click', (e) => {
        e.preventDefault();
        
        let tooltip = document.querySelector('.tooltip');
        const tooltipText = tooltipElement.getAttribute('title');

        const createTooltip = () => {
            tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = tooltipText;

            const parentNode = tooltipElement.parentNode;
            parentNode.insertBefore(tooltip, tooltipElement.nextSibling);
            
            const rect = tooltipElement.getBoundingClientRect();
            const top = rect.top + window.scrollY;
            const left = rect.left + window.scrollX;
            
            tooltip.style = `position:absolute; left:${left}px; top:${top + 22}px`;

            tooltip.classList.add('tooltip_active');
        };

        if (!tooltip) {
            createTooltip();
    
        } else if (e.target.getAttribute('title') === tooltip.textContent) {
            tooltip.classList.toggle('tooltip_active');

        } else {
            tooltip.remove();
            createTooltip();            
        };        
    });  
});
