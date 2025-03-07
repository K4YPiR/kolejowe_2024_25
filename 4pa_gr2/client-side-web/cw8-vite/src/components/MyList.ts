import { ListType } from "../tools";
 const MyList = (type: ListType, items: string[])
    : HTMLUListElement | HTMLOListElement => {
    const list = document.createElement(type);
    for (const item of items) {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    }
    return list;
};
export default MyList;