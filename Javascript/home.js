// <!-- UC-3 - Display person Details in Tabular Format usingTemplate Literals -->

window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {

const headerHtml =
    `<tr>
    <th>Fullname</th>
    <th>Address</th>
    <th>City</th>
    <th>State</th>
    <th>Zip Code</th>
    <th>Phone Number</th>
    <th>Actions</th>
    </tr>`;

const innerHtml = `${headerHtml}
<tr>
<td>Nikita Jadhav</td>
<td>Sujal Nagar</td>
<td>Mumbai</td>
<td> Gujrat</td>
<td>414 003</td>
<td>91 8329180819</td>
<td>
<img onclick="remove(this)" alt="delete" src="C:/Users/91992/Documents/HTML/Address%20Book/assets/icons/delete-black-18dp.svg">
<img onclick="update(this)" alt="edit" src="C:/Users/91992/Documents/HTML/Address%20Book/assets/icons/create-black-18dp.svg"  >
</td>
</tr>
<tr>
<td>Atharva Patil</td>
<td>Ram Nagar</td>
<td>Dhule</td>
<td> Maharashtra</td>
<td>424 001</td>
<td>91 9168616264</td>
<td>
<img onclick="remove(this)" alt="delete"src="C:/Users/91992/Documents/HTML/Address%20Book/assets/icons/delete-black-18dp.svg">
<img onclick="update(this)" alt="edit" src="C:/Users/91992/Documents/HTML/Address%20Book/assets/icons/create-black-18dp.svg"  >
</td>
<tr>
    
<td>Dhanashri Nerkar</td>
<td>Keshar Colony</td>
<td>Pune</td>
<td> Maharashtra</td>
<td>424 002</td>
<td>91 9145288018</td>
<td>
    <img onclick="remove(this)" alt="delete"src="C:/Users/91992/Documents/HTML/Address%20Book/assets/icons/delete-black-18dp.svg">
    <img onclick="update(this)" alt="edit" src="C:/Users/91992/Documents/HTML/Address%20Book/assets/icons/create-black-18dp.svg"  >
    </td>
</tr>
        </td>
    </tr>`;
document.querySelector('#table-display').innerHTML = innerHtml;
}
