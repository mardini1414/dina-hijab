export default function (id) {
  const el = document.getElementById(id);
  el.scrollIntoView({ behavior: 'smooth' });
}
