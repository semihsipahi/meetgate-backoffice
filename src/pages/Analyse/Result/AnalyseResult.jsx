import React, { useEffect, useState } from 'react';
import ProfileIcon from '../../../../public/images/profile_icon.png';
import CardSection from '../../../components/Analyse/CardSelection';
import DashboardLayout from '../../../components/Common/Dashboard/DashboardLayout';
import { fetchMeetingRecords } from '../../../service/MeetingRecord/MeetingRecordService';
import './style.css';

function SideBar() {
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
}

function CandidateHeader(props) {
  return (
    <header className="candidate-header">
      <div className="candidate-info">
        <img
          src={ProfileIcon}
          alt="Aday Fotoğrafı"
          className="candidate-photo"
        />

        <div>
          <h1 className="candidate-name">Aday</h1>
          <p className="candidate-status">Tıklanma durumu vs.</p>
        </div>
      </div>
      <div className="candidate-score">
        <span className="score-label">Ortalama Eşleşme</span>
        <span className="score-value">{props.score}</span>
      </div>
    </header>
  );
}

function AnalysisDetail(props) {
  return (
    <section className="analysis-details">
      <h2>Analiz Detayları</h2>
      <p>
        Burada adayın genel analiz verileri yer alıyor. Örneğin soru-cevap,
        video, ses ve metin analizleri gibi.
      </p>
      <br />
      <div className="analysis-all">
        <h3>Tüm Analizler</h3>
        <div className="analysis-cards">
          {/* Soru Cevap Analizi Kartı */}
          <div className="analysis-card">
            <h4>Soru Cevap Analizi</h4>
            <div className="analysis-score">{props.score}</div>
            <div className="analysis-tags">
              <span className="tag orange">Geliştirilebilir</span>
              <span className="tag red">Zayıf</span>
            </div>
            <a href="#" className="analysis-link">
              Detaylar için tıkla
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const AnalyseResult = () => {
  const [rootRec, setRootRec] = useState();
  const [records, setRecords] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetchMeetingRecords();

      if (!response) {
        return;
      }

      setRootRec(response?.data);
      setRecords(response?.data?.meetingRecordItemList);
    })();
  }, []);

  console.log(records);

  return (
    <DashboardLayout>
      <div className="app-container">
        {/* Sol Menü (SideBar) */}
        {/* <SideBar /> */}

        {/* Ana İçerik */}
        <main className="main-content">
          {/* Üst Kısım: Aday Başlığı */}
          <CandidateHeader score={rootRec?.score} />

          {/* Sekme Butonları (opsiyonel) */}
          <div className="tabs">
            <button className="tab active">Genel Bilgiler</button>
            <button className="tab">Analiz Detayları</button>
          </div>

          {/* Analiz Detayları */}
          <AnalysisDetail score={rootRec?.score} />
          <CardSection records={records} />
        </main>
      </div>
    </DashboardLayout>
  );
};
export default AnalyseResult;
