import React, { Component } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import "../table.css";
import { Layout } from "antd";
import "../App.scss";

const { Header, Footer } = Layout;
const today = new Date();
const year = today.getFullYear();

export default class Snm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }
  componentDidMount() {
    axios({
      method: "get",
      url: "https://backendcatatantugas.herokuapp.com/mahasiswa/all",
      headers: {
        accept: "*/*",
      },
    })
      .then((data) => {
        console.log(data.data);
        let filterData = data.data.filter((data) => {
          let cariNim = data.nim;
          return cariNim.includes("211201171200");
        });

        this.setState({
          news: filterData,
        });
        const a =
          filterData == undefined || filterData.length == 0
            ? alert("Gak Ada Data !")
            : alert("Data Berhasil Ditemukan");
        return a;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Layout className="sub-page">
        <Header className="navbar">
          <a href="/">
            <p className="title">Tugas Akhir Kelompok 23</p>
          </a>
        </Header>
        <div>
          <div>
            <center>
              <h1>SNMPTN</h1>
            </center>
            <center>
              <table class="demo-table">
                <thead>
                  <tr>
                    <th>Nama</th>
                    <th>Nim</th>
                    <th>Asal</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.news.map((results, index) => {
                    return (
                      <tr>
                        <td>{results.nama}</td>
                        <td>{results.nim}</td>
                        <td>{results.asal}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </center>
          </div>
        </div>
        <Footer style={{ textAlign: "center", color: "#28abb9" }}>
          @{year} Created by Kelompok 23
        </Footer>
      </Layout>
    );
  }
}
