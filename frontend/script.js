const BASE_URL = "https://deltasigmatask.onrender.com/bharani/items";

function addItem() {
    const item = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        price: document.getElementById("price").value
    };

    // Show status while processing
    document.getElementById("addStatus").textContent = "Item is getting added...";
    fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item)
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("addStatus").textContent = `Item added successfully with id: ${data.id}`;
        document.getElementById("result").textContent = ""; 
        // Add item to right column
        addItemToList(data);
    })
    .catch(() => {
        document.getElementById("addStatus").textContent = "Failed to add item.";
    });
}

function addItemToList(item) {
    const itemsList = document.getElementById("itemsList");
    const div = document.createElement("div");
    div.style.borderBottom = "1px solid #eee";
    div.style.padding = "8px 0";
    div.textContent = `ID: ${item.id}, Name: ${item.name}, Price: ${item.price}`;
    itemsList.appendChild(div);
}

function getItem() {
    const id = document.getElementById("itemId").value;

    fetch(`${BASE_URL}/${id}`)
        .then(res => {
            if (!res.ok) throw new Error("Item not found");
            return res.json();
        })
        .then(data => {
            document.getElementById("result").textContent = JSON.stringify(data, null, 2);
        })
        .catch(err => {
            document.getElementById("result").textContent = err.message;
        });
}
