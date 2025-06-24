// Tab switching function
function openTab(tabName) {
    const tabs = document.getElementsByClassName('tab');
    const tabContents = document.getElementsByClassName('tab-content');

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }

    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');

    // Populate Monster Hunt content as an example
    if (tabName === 'MonsterHunt') {
        const monsterHuntItems = [
            { name: 'Monster Hunt ATK Boost 25%', cost: 1000 },
            { name: '5000 Energy', cost: 1125 },
            { name: '10000 Energy', cost: 2000 },
            { name: '20000 Energy', cost: 3500 },
            { name: '50000 Energy', cost: 7500 }
        ];
        const tbody = document.getElementById('monsterHuntItems');
        tbody.innerHTML = '';
        monsterHuntItems.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.cost}</td>
                <td><input type="number" min="0" onchange="updateWishlist('${item.name}', ${item.cost}, this.value)"></td>
            `;
            tbody.appendChild(row);
        });
    }
}

// Update wishlist function
function updateWishlist(itemName, gemCost, quantity) {
    const wishlist = document.getElementById('wishlistItems');
    const totalGems = document.getElementById('totalGems');
    let total = parseInt(totalGems.textContent) || 0;

    // Remove existing item if quantity is 0
    if (quantity === '0' || quantity === '') {
        const li = document.querySelector(`#wishlistItems li[data-item="${itemName}"]`);
        if (li) {
            total -= li.dataset.cost * (parseInt(li.dataset.quantity) || 0);
            li.remove();
        }
    } else {
        // Add or update item in wishlist
        const li = document.querySelector(`#wishlistItems li[data-item="${itemName}"]`);
        if (li) {
            total -= li.dataset.cost * (parseInt(li.dataset.quantity) || 0);
            li.dataset.quantity = quantity;
            li.textContent = `${itemName} x${quantity} - ${gemCost * quantity} Gems`;
            total += gemCost * quantity;
        } else {
            const newLi = document.createElement('li');
            newLi.dataset.item = itemName;
            newLi.dataset.cost = gemCost;
            newLi.dataset.quantity = quantity;
            newLi.textContent = `${itemName} x${quantity} - ${gemCost * quantity} Gems`;
            wishlist.appendChild(newLi);
            total += gemCost * quantity;
        }
    }
    totalGems.textContent = total;
}

// Initialize with Monster Hunt tab active
document.addEventListener('DOMContentLoaded', () => {
    openTab('MonsterHunt');
});