import { Card } from "../components";
import { Layout } from "antd";
import "./App.scss";
import sbm from "../assets/sbm.jpg";
import snm from "../assets/snm.jpg";
import undip from "../assets/undip.jpg";
import ristek from "../assets/ristek.jpg";

const { Header, Content, Footer } = Layout;
const today = new Date();
const year = today.getFullYear();

function App() {
  return (
    <Layout className="main-page">
      <Header className="navbar">
        <a href="/">
          <p className="title">Tugas Akhir Kelompok 23</p>
        </a>
      </Header>
      <center>
        <h3 className="judul">
          Data Mahasiswa Teknik Komputer Undip 2017 Berdasarkan Jalur Masuk
        </h3>
      </center>
      <Content className="content">
        <Card
          judul="SBMPTN"
          deskripsi="SBMPTN merupakan seleksi penerimaan mahasiswa baru PTN menggunakan pola ujian tertulis secara nasional"
          photo={sbm}
          link="/sbmptn"
          label="SBMPTN"
          color="red"
        />
        <Card
          judul="SNMPTN"
          deskripsi="SBMPTN merupakan seleksi penerimaan mahasiswa baru PTN menggunakan nilai dari rapot semester 1-5"
          photo={snm}
          link="/snmptn"
          label="SNMPTN"
          color="blue"
        />
        <Card
          judul="UM Undip"
          deskripsi="Seleksi Ujian Mandiri ini adalah seleksi mahasiswa strata I (S1) yang diadakan Universitas Diponegoro sendiri"
          photo={undip}
          link="/um"
          label="UM Undip"
          color="grey"
          spacing="40"
        />
        <Card
          judul="Afirmasi"
          deskripsi="Afirmasi merupakan program RistekDikti untuk mahasiswa dari daerah terdepan, terluar dan tertinggal (3T)"
          photo={ristek}
          link="/afirmasi"
          label="Afirmasi"
          color="yellow"
          spacing="40"
        />
      </Content>
      <Footer style={{ textAlign: "center", color: "#28abb9" }}>
        @{year} Created by Kelompok 23
      </Footer>
    </Layout>
  );
}

export default App;
