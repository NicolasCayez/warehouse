import { generateBreadCrumb } from "/scripts/breadcrumb";
import { generateDashboard } from "/scripts/dashboard";
import { createCard, createCardTitle } from "../../scripts/cards";

// link aspect change
let presentPageTitle = document.getElementById("headerMyWarehousesLink");
presentPageTitle.classList.remove('title');
presentPageTitle.classList.add('title-bold');

// breadcrumb
let breadCrumbLinks = [['home','/index.html'], ['My Warehouses','/pages/myWareHouses/myWareHouses.html']];
generateBreadCrumb(breadCrumbLinks);


//DASHBOARD
// generateDashboard();
// dashboard link style
document.getElementById('linkMyWarehouses').classList.remove('title');
document.getElementById('linkMyWarehouses').classList.add('title-bold');


//
createCard('myWarehouseCardContainer','myWarehouseCard');
createCardTitle('myWarehouseCard', 'myWarehouseCardTitle', 'My WareHouses');
createCard('selectedCardContainer','selectedCard');
createCardTitle('selectedCard', 'myWarehouseCardTitle', 'Selected');
createCard('searchCardContainer','searchCard');
createCardTitle('searchCard', 'myWarehouseCardTitle', 'Search');
createCard('lastEventsCardContainer','lastEventsCard');
createCardTitle('lastEventsCard', 'myWarehouseCardTitle', 'Last events');

//MY WAREHOUSES LIST
let warehousesListContainer = document.getElementById('myWarehouseCard');
if(warehousesListContainer != null){
    let warehousesList = document.createElement('ul');
    warehousesList.style.height = '100%';
    warehousesList.style.overflow = 'hidden';
    warehousesList.style.overflowY = 'scroll';
    warehousesList.classList.add('card');
    warehousesListContainer.append(warehousesList);

    //! a générer
    let warehousesListArray = ['WareHouse 1', 'WareHouse 2', 'Tom\'s Depot'];
    for(let i=0; i<warehousesListArray.length; i++){
        let $li = document.createElement('li');
        $li.classList.add('lh-3');
        $li.style.listStyle = 'none';
        $li.innerText = '> ' + warehousesListArray[i];
        warehousesList.append($li);
    };

}
