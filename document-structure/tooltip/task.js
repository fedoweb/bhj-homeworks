
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
            tooltipElement.appendChild(tooltip);

            tooltipElement.style = 'position:relative;';
            tooltip.style = 'position:absolute; left:0; top:22px';

            tooltip.classList.add('tooltip_active');
            isOpen = true;
        } else {
            if (isOpen) {
                tooltip.classList.remove('tooltip_active');
                isOpen = false;
            } else {
                tooltip.classList.add('tooltip_active');
                isOpen = true;
            }
        }
    });
});
