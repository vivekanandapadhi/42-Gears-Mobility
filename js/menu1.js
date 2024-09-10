 //JSON data
 const jsonData = [
    { sNo: "1", project: "Template 101", progress: "47%", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, deserunt beatae necessitatibus reiciendis officiis facere dolorem debitis, maiores consequuntur esse delectus fuga iure illo dolorum. Deleniti totam mollitia sequi, aliquid minima accusamus harum illum dolorem architecto consectetur quae ratione, perferendis sapiente ipsum sed deserunt enim error magnam nulla natus consequatur est facere! A sit aspernatur doloremque at magnam tenetur corrupti beatae! Eum expedita fugiat, voluptatem nostrum, laboriosam placeat aut sapiente quas voluptate laborum commodi asperiores aliquam modi delectus enim dolores, consequuntur vel dolore. Amet quidem tempore impedit ea cupiditate doloremque recusandae, voluptates fugit, rem sequi non esse architecto enim tenetur?" },
    { sNo: "2", project: "Template 174", progress: "27%", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, deserunt beatae necessitatibus reiciendis officiis facere dolorem debitis, maiores consequuntur esse delectus fuga iure illo dolorum. Deleniti totam mollitia sequi, aliquid minima accusamus harum illum dolorem architecto consectetur quae ratione, perferendis sapiente ipsum sed deserunt enim error magnam nulla natus consequatur est facere! A sit aspernatur doloremque at magnam tenetur corrupti beatae! Eum expedita fugiat, voluptatem nostrum, laboriosam placeat aut sapiente quas voluptate laborum commodi asperiores aliquam modi delectus enim dolores, consequuntur vel dolore. Amet quidem tempore impedit ea cupiditate doloremque recusandae, voluptates fugit, rem sequi non esse architecto enim tenetur?" },
    { sNo: "3", project: "Template 256", progress: "71%", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, deserunt beatae necessitatibus reiciendis officiis facere dolorem debitis, maiores consequuntur esse delectus fuga iure illo dolorum. Deleniti totam mollitia sequi, aliquid minima accusamus harum illum dolorem architecto consectetur quae ratione, perferendis sapiente ipsum sed deserunt enim error magnam nulla natus consequatur est facere! A sit aspernatur doloremque at magnam tenetur corrupti beatae! Eum expedita fugiat, voluptatem nostrum, laboriosam placeat aut sapiente quas voluptate laborum commodi asperiores aliquam modi delectus enim dolores, consequuntur vel dolore. Amet quidem tempore impedit ea cupiditate doloremque recusandae, voluptates fugit, rem sequi non esse architecto enim tenetur?" },
    { sNo: "4", project: "Template 345", progress: "50%", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, deserunt beatae necessitatibus reiciendis officiis facere dolorem debitis, maiores consequuntur esse delectus fuga iure illo dolorum. Deleniti totam mollitia sequi, aliquid minima accusamus harum illum dolorem architecto consectetur quae ratione, perferendis sapiente ipsum sed deserunt enim error magnam nulla natus consequatur est facere! A sit aspernatur doloremque at magnam tenetur corrupti beatae! Eum expedita fugiat, voluptatem nostrum, laboriosam placeat aut sapiente quas voluptate laborum commodi asperiores aliquam modi delectus enim dolores, consequuntur vel dolore. Amet quidem tempore impedit ea cupiditate doloremque recusandae, voluptates fugit, rem sequi non esse architecto enim tenetur?" }
];

// Function to dynamically populate table rows
function populateTable() {
    const tableBody = document.getElementById("tableBody");

    // Loop through the JSON data and create table rows
    jsonData.forEach((item, index) => {
        // Create a new table row
        const row = document.createElement("tr");
     

        // Create and append each cell to the row
        const cell1 = document.createElement("td");
        cell1.textContent = item.sNo;
        row.appendChild(cell1);

        const cell2 = document.createElement("td");
        cell2.textContent = item.project;
        row.appendChild(cell2);

        const cell3 = document.createElement("td");
        cell3.textContent = item.progress;
        row.appendChild(cell3);

        // Create description row (initially hidden)
        const descriptionRow = document.createElement("tr");
        descriptionRow.style.display = "none";
        descriptionRow.style.textAlign="left"
        const descriptionCell = document.createElement("td");
        descriptionCell.setAttribute("colspan", 4);
        descriptionCell.textContent = item.description;
        descriptionCell.style.padding="20px"
        descriptionCell.style.backgroundColor="#ede5e5"
        descriptionCell.style.borderRadius="20px"
        descriptionRow.appendChild(descriptionCell);

        // Create description cell with View More/ Less button
        const descCell = document.createElement("td");
        const viewMoreBtn = document.createElement("button");
        viewMoreBtn.textContent = "View More";
        viewMoreBtn.onclick = function () {
            if (descriptionRow.style.display === "none") {
                descriptionRow.style.display = "table-row";
                viewMoreBtn.textContent = "View Less";
            } else {
                descriptionRow.style.display = "none";
                viewMoreBtn.textContent = "View More";
            }
        };
        descCell.appendChild(viewMoreBtn);
        row.appendChild(descCell);

        // Append the row and the hidden description row to the table
        tableBody.appendChild(row);
        tableBody.appendChild(descriptionRow);
    });
}

// Call the function to populate the table when the page loads
window.onload = populateTable;