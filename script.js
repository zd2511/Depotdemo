const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
menuToggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle?.setAttribute('aria-expanded','false');}));

document.getElementById('year').textContent=new Date().getFullYear();

const modal=document.getElementById('enquiryModal');
const modalVehicle=document.getElementById('modalVehicle');
const modalGo=document.getElementById('modalGo');
const closeModal=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';};
document.querySelectorAll('[data-vehicle]').forEach(button=>button.addEventListener('click',()=>{modalVehicle.textContent=`You selected: ${button.dataset.vehicle}.`;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}));
document.getElementById('modalClose').addEventListener('click',closeModal);
modal.addEventListener('click',e=>{if(e.target===modal)closeModal();});
modalGo.addEventListener('click',closeModal);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))closeModal();});

const form=document.getElementById('enquiryForm');
const status=document.getElementById('formStatus');
form.addEventListener('submit',async e=>{
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const vehicle=document.getElementById('vehicle').value;
  const message=document.getElementById('message').value.trim();
  const enquiry=`Vehicle Depot enquiry\nName: ${name}\nVehicle: ${vehicle}\nMessage: ${message||'Please provide more information about availability, finance and delivery.'}`;
  try{await navigator.clipboard.writeText(enquiry);status.textContent='Enquiry copied to your clipboard. No dealership contact details were provided in the supplied material, so it is ready for you to paste into the dealership’s preferred contact channel.';}catch{status.textContent='Your enquiry is ready. Copy the text below and send it through the dealership’s preferred contact channel.';}
});
