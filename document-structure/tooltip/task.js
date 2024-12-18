const tooltipElements = document.querySelectorAll('.has-tooltip');

tooltipElements.forEach(tooltipElement => {
    let isOpen = false;

    tooltipElement.addEventListener('click', (e) => {
        e.preventDefault();

        const tooltipText = tooltipElement.getAttribute('title');
        let tooltip = tooltipElement.querySelector('.tooltip');
        

        document.querySelectorAll('.tooltip_active').forEach(tooltip => {
            tooltip.classList.remove('tooltip_active');
            tooltip.parentNode.removeChild(tooltip);
        });

        if (!tooltip) {
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
            isOpen = true;

        } else if (!isOpen) {
            tooltip.classList.add('tooltip_active');
            isOpen = true;
      
        } else {
            tooltip.classList.remove('tooltip_active');
            isOpen = false;
        };
    });
});
