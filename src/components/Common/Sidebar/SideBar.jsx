import './style.css';

const SideBar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>Meetgate</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <a href="#">Tüm Görüşmeler</a>
          </li>
          <li>
            <a href="#">Görüşme Oluştur</a>
          </li>
          <li>
            <a href="#">Diğer Sorular</a>
          </li>
          <li>
            <a href="#">Soru Cevap</a>
          </li>
          <li>
            <a href="#">Firma Bilgisi</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
export default SideBar;
