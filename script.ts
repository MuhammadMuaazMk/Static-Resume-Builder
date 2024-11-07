
// const toggleBtn=document.getElementById('.toggle-btn') as HTMLButtonElement|null;
// const skils=document.getElementById('.skills-list') as HTMLDivElement|null;


// if(toggleBtn && skils){
//     toggleBtn.addEventListener('click',()=>{
//         if(skils.style.display==='none'){
//             skils.style.display='block';
//             toggleBtn.value="Hide Skills"
//         }else{
//             skils.style.display='none';
//              toggleBtn.value="Show Skills"
//         }
//     })
// }
// else{
//     console.log("Elements not found");
// }

function toggleSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    const content = section?.querySelector('.section-content');

    if (content) {
        content.classList.toggle('hidden');
    }
}
