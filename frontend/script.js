const BASE_URL = "https://deltasigmatask.onrender.com/bharani/items";

function addItem() {
    const item = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        price: document.getElementById("price").value
    };

    fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item)
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("result").textContent =
            JSON.stringify(data, null, 2);
    });
}

function getItem() {
    const id = document.getElementById("itemId").value;

    fetch(`${BASE_URL}/${id}`)
        .then(res => {
            if (!res.ok) throw new Error("Item not found");
            return res.json();
        })
        .then(data => {
            document.getElementById("result").textContent =
                JSON.stringify(data, null, 2);
        })
        .catch(err => {
            document.getElementById("result").textContent = err.message;
        });
}
