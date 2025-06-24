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
                <td>${item.cost.toLocaleString()}</td>
                <td><input type="number" min="0" onchange="updateWishlist('${item.name}', ${item.cost}, this.value)"></td>
            `;
            tbody.appendChild(row);
        });
    } else if (tabName === 'SpeedUps') {
        const speedUpItems = [
            { name: 'Speed 60 Min', cost: 130 },
            { name: 'Speed 3 Hours', cost: 300 },
            { name: 'Speed 8 Hours', cost: 650 },
            { name: 'Speed 15 Hours', cost: 1000 },
            { name: 'Speed 24 Hours', cost: 1500 },
            { name: 'Speed 3 Days', cost: 4400 },
            { name: 'Speed 7 Days', cost: 10000 },
            { name: 'Speed 30 Days', cost: 40000 }
        ];
        const tbody = document.getElementById('speedUpItems');
        tbody.innerHTML = '';
        speedUpItems.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.cost.toLocaleString()}</td>
                <td><input type="number" min="0" onchange="updateWishlist('${item.name}', ${item.cost}, this.value)"></td>
            `;
            tbody.appendChild(row);
        });
    } else if (tabName === 'Combat') {
        const combatItems = [
            { name: 'Braveheart', cost: 2000 },
            { name: 'Random Relocator', cost: 500 },
            { name: 'Relocator', cost: 1500 },
            { name: 'Royal Pass', cost: 100000 },
            { name: 'Winged Boots 25%', cost: 500 },
            { name: 'Winged Boots 50%', cost: 900 },
            { name: 'Attack Boost 20% 12h', cost: 250 },
            { name: 'Attack Boost 20% 24h', cost: 400 },
            { name: 'Army Defence Boost 20% 12h', cost: 250 },
            { name: 'Defence Boost 20% 24h', cost: 400 },
            { name: 'Army Size Boost 20% 4h', cost: 2400 },
            { name: 'Army Size Boost 50% 4h', cost: 5000 },
            { name: 'Shield 8 Hours', cost: 500 },
            { name: 'Shield 24 Hours', cost: 1000 },
            { name: 'Shield 3 Days', cost: 3500 },
            { name: 'Shield 7 Days', cost: 10000 },
            { name: 'Shield 14 Days', cost: 25000 },
            { name: 'Anti-Scout 24h', cost: 600 },
            { name: 'Anti-Scout 3d', cost: 1200 },
            { name: 'Anti-Scout 7d', cost: 3000 }
        ];
        const tbody = document.getElementById('combatItems');
        tbody.innerHTML = '';
        combatItems.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.cost.toLocaleString()}</td>
                <td><input type="number" min="0" onchange="updateWishlist('${item.name}', ${item.cost}, this.value)"></td>
            `;
            tbody.appendChild(row);
        });
    } else if (tabName === 'PlayerExp') {
        const playerExpItems = [
            { name: '25% Player EXP Boost 24h', cost: 2500 },
            { name: 'Talent Reset', cost: 1000 },
            { name: 'Talent Tome', cost: 1000 },
            { name: 'Quest Scroll (Admin)', cost: 800 },
            { name: 'Quest Scroll (Guild)', cost: 1000 },
            { name: '500 VIP Points', cost: 500 },
            { name: '1000 VIP Points', cost: 1000 },
            { name: '5000 VIP Points', cost: 5000 },
            { name: '10 Lucky Tokens', cost: 6600 },
            { name: '100 Lucky Tokens', cost: 60000 },
            { name: '1000 Holy Stars', cost: 2200 },
            { name: '10000 Holy Stars', cost: 20000 }
        ];
        const tbody = document.getElementById('playerExpItems');
        tbody.innerHTML = '';
        playerExpItems.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.cost.toLocaleString()}</td>
                <td><input type="number" min="0" onchange="updateWishlist('${item.name}', ${item.cost}, this.value)"></td>
            `;
            tbody.appendChild(row);
        });
    } else if (tabName === 'Resources') {
        const resourceItems = [
            { name: 'Gather Boost 50% 24h', cost: 600 },
            { name: 'Gather Boost 50% 7d', cost: 3360 },
            { name: 'Reduce Upkeep 50% 24h', cost: 2000 },
            { name: 'Reduce Upkeep 50% 7d', cost: 11200 },
            { name: 'Food 20 Million', cost: 10000 },
            { name: 'Food 60 Million', cost: 28000 },
            { name: 'Stone 5 Million', cost: 10000 },
            { name: 'Stone 15 Million', cost: 28000 },
            { name: 'Wood 5 Million', cost: 10000 },
            { name: 'Wood 15 Million', cost: 28000 },
            { name: 'Ore 5 Million', cost: 10000 },
            { name: 'Ore 15 Million', cost: 28000 },
            { name: 'Gold 2 Million', cost: 10000 },
            { name: 'Gold 6 Million', cost: 28000 }
        ];
        const tbody = document.getElementById('resourceItems');
        tbody.innerHTML = '';
        resourceItems.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.cost.toLocaleString()}</td>
                <td><input type="number" min="0" onchange="updateWishlist('${item.name}', ${item.cost}, this.value)"></td>
            `;
            tbody.appendChild(row);
        });
    } else if (tabName === 'ChestsTools') {
        const chestsToolsItems = [
            { name: 'Rare Material Chest', cost: 1500 },
            { name: 'Epic Material Chest', cost: 3000 },
            { name: 'Legendary Material Chest', cost: 3000 },
            { name: 'Rare Jewel Chest', cost: 3000 },
            { name: 'Epic Jewel Chest', cost: 6000 },
            { name: 'Legendary Jewel Chest', cost: 6000 },
            { name: 'Chisel I', cost: 400 },
            { name: 'Chisel II', cost: 1000 },
            { name: 'Chisel III', cost: 2000 },
            { name: 'Chisel IV', cost: 3000 },
            { name: 'Chisel V', cost: 4000 }
        ];
        const tbody = document.getElementById('chestsToolsItems');
        tbody.innerHTML = '';
        chestsToolsItems.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.cost.toLocaleString()}</td>
                <td><input type="number" min="0" onchange="updateWishlist('${item.name}', ${item.cost}, this.value)"></td>
            `;
            tbody.appendChild(row);
        });
    } else if (tabName === 'OtherItems') {
        const otherItems = [
            { name: 'Archaic Tome', cost: 900 },
            { name: 'Gold Hammer', cost: 2000 },
            { name: 'War Tomes', cost: 15 },
            { name: 'Steel Cuffs', cost: 15 },
            { name: 'Soul Crystal', cost: 15 },
            { name: 'Crystal Pickaxe', cost: 20 },
            { name: 'Finish Demolition', cost: 20 }
        ];
        const tbody = document.getElementById('otherItems');
        tbody.innerHTML = '';
        otherItems.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.cost.toLocaleString()}</td>
                <td><input type="number" min="0" onchange="updateWishlist('${item.name}', ${item.cost}, this.value)"></td>
            `;
            tbody.appendChild(row);
        });
    } else if (tabName === 'MergingAnima') {
        const mergingAnimaItems = [
            { name: 'Bright Talent Orb', cost: 3000 },
            { name: 'Brilliant Talent Orb', cost: 7500 },
            { name: 'Merge 60 Minutes', cost: 260 },
            { name: 'Merge 3 Hours', cost: 600 },
            { name: 'Merge 8 Hours', cost: 1300 },
            { name: 'Merge 24 Hours', cost: 3000 },
            { name: 'Merge 3 Days', cost: 8800 },
            { name: 'Merge 7 Days', cost: 20000 },
            { name: '2m Anima', cost: 10000 },
            { name: '6m Anima', cost: 28000 },
            { name: 'Ancient Core', cost: 1000 },
            { name: 'Chaos Core', cost: 7500 },
            { name: '10% Pact Merging Boost 1 hour', cost: 1000 }
        ];
        const tbody = document.getElementById('mergingAnimaItems');
        tbody.innerHTML = '';
        mergingAnimaItems.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.cost.toLocaleString()}</td>
                <td><input type="number" min="0" onchange="updateWishlist('${item.name}', ${item.cost}, this.value)"></td>
            `;
            tbody.appendChild(row);
        });
    }
}

function updateWishlist(itemName, gemCost, quantity) {
    const wishlist = document.getElementById('wishlistItems');
    const totalGems = document.getElementById('totalGems');
    let total = parseInt(totalGems.textContent.replace(/,/g, '')) || 0;

    if (quantity === '0' || quantity === '') {
        const li = document.querySelector(`#wishlistItems li[data-item="${itemName}"]`);
        if (li) {
            total -= li.dataset.cost * (parseInt(li.dataset.quantity) || 0);
            li.remove();
        }
    } else {
        const li = document.querySelector(`#wishlistItems li[data-item="${itemName}"]`);
        if (li) {
            total -= li.dataset.cost * (parseInt(li.dataset.quantity) || 0);
            li.dataset.quantity = quantity;
            li.textContent = `${itemName} x${quantity} - ${(gemCost * quantity).toLocaleString()} Gems`;
            total += gemCost * quantity;
        } else {
            const newLi = document.createElement('li');
            newLi.dataset.item = itemName;
            newLi.dataset.cost = gemCost;
            newLi.dataset.quantity = quantity;
            newLi.textContent = `${itemName} x${quantity} - ${(gemCost * quantity).toLocaleString()} Gems`;
            wishlist.appendChild(newLi);
            total += gemCost * quantity;
        }
    }
    totalGems.textContent = total.toLocaleString();
}

// Initialize with MonsterHunt tab active
document.addEventListener('DOMContentLoaded', () => {
    openTab('MonsterHunt');
});