export function animateBoxes() {
    const mainDiv = document.getElementById('boxes-animation-div')
    
    // const boxesLength = mainDiv.children.length
    const angleIncrement = 360 / 6
    const distance = 200

    const icons = ['🧸', '♈', '👽', '😻', '🤪', '👂', '🎵']

    for (var i = 0; i < 7; i++) {

        
        const newElement = document.createElement('div');
        newElement.classList.add('box')
        console.log(`hi ${i}`)

        const textEl = document.createElement('p')
        textEl.textContent = icons[i]
        textEl.style.fontSize = '60px'
        newElement.style.display = 'flex'
        newElement.style.justifyContent = 'center'
        newElement.style.alignItems = 'center'
        newElement.style.borderRadius = '10px'

        if (i == 0) {
            mainDiv.appendChild(newElement) 
            newElement.style.setProperty('--translate-x', '0px');
            newElement.style.setProperty('--translate-y', '0px');
            newElement.appendChild(textEl)
            continue;
        }

        const angle = i * angleIncrement;

        const translateX = Math.cos(angle * (Math.PI / 180)) * distance; 
        const translateY = Math.sin(angle * (Math.PI / 180)) * distance; 
        
        newElement.style.setProperty('--translate-x', `${translateX}px`);
        newElement.style.setProperty('--translate-y',`${translateY}px`);

        newElement.appendChild(textEl)
        mainDiv.appendChild(newElement)
    }

}