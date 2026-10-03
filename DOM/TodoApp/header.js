function Header(title){
    const header = document.createElement("h1");
    header.id = "header";
    header.textContent = title || "Todo App";
    return header;
}

export default Header;