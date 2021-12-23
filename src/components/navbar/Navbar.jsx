import React from "react";
import "./style.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="https://cosmic-labs.io/#/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://cosmic-labs.io/#/Staking">
              Staking
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://cosmic-labs.io/#/Shop">
              Shop
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://cosmic-labs.io/#/Roadmap">
              Roadmap
            </a>
          </li>
          <li className="nav-item social-link w-inline-block">
            <a
              href="https://twitter.com/CosmicLabsNFT"
              rel="noopener"
              target="_blank"
              className="nav-link"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM5LjQwNSA4LjIyODM1QzM4LjAxMzMgOC44NDUwMiAzNi41MTgzIDkuMjYxNjkgMzQuOTQ2NiA5LjQ1MDAyQzM2LjU1IDguNDkwMDIgMzcuNzggNi45NjY2OSAzOC4zNiA1LjE1MzM1QzM2Ljg2IDYuMDQzMzUgMzUuMTk4MyA2LjY5MDAyIDMzLjQzIDcuMDM2NjlDMzIuMDEzMyA1LjUzMDAyIDI5Ljk5NjYgNC41ODY2OSAyNy43NjMzIDQuNTg2NjlDMjMuNDc2NiA0LjU4NjY5IDIwIDguMDYzMzUgMjAgMTIuMzUzNEMyMCAxMi45NiAyMC4wNyAxMy41NSAyMC4yIDE0LjEyQzEzLjc0NSAxMy43OTUgOC4wMjY2NCAxMC43MDM0IDQuMTk2NjQgNi4wMDY2OUMzLjUyOTk4IDcuMTU2NjkgMy4xNDY2NCA4LjQ5MDAyIDMuMTQ2NjQgOS45MTAwMkMzLjE0NjY0IDEyLjYwMzQgNC41MTgzMSAxNC45ODE3IDYuNTk5OTggMTYuMzczNEM1LjMyNjY0IDE2LjMzMTcgNC4xMjk5OCAxNS45ODM0IDMuMDgzMzEgMTUuNDAxN1YxNS41MDE3QzMuMDgzMzEgMTkuMjYzMyA1Ljc1ODMxIDIyLjQwMTcgOS4zMTE2NCAyMy4xMTVDOC42NTgzMSAyMy4yOTE3IDcuOTczMzEgMjMuMzg1IDcuMjY2NjQgMjMuMzg1QzYuNzY2NjQgMjMuMzg1IDYuMjc4MzEgMjMuMzM4MyA1LjgwNDk4IDIzLjI0ODNDNi43OTMzMSAyNi4zMzE3IDkuNjU5OTggMjguNTc4MyAxMy4wNTgzIDI4LjYzODNDMTAuNCAzMC43MjE3IDcuMDUxNjQgMzEuOTYzMyAzLjQxNDk4IDMxLjk2MzNDMi43ODgzMSAzMS45NjMzIDIuMTY5OTggMzEuOTI2NyAxLjU2MTY1IDMxLjg1NUM0Ljk5ODMxIDM0LjA2IDkuMDc4MzEgMzUuMzQzMyAxMy40NjE2IDM1LjM0MzNDMjcuNzQ1IDM1LjM0MzMgMzUuNTUzMyAyMy41MTMzIDM1LjU1MzMgMTMuMjUzNEMzNS41NTMzIDEyLjkyIDM1LjU0NSAxMi41ODM0IDM1LjUzIDEyLjI1QzM3LjA0NjYgMTEuMTUzNCAzOC4zNjMzIDkuNzg4MzUgMzkuNDAxNiA4LjIzMzM1TDM5LjQwNSA4LjIyODM1WiIgZmlsbD0iIzFEQTFGMiIvPgo8L3N2Zz4K"
                loading="lazy"
                alt="twitter"
              />
            </a>
          </li>
          <li className="nav-item social-link w-inline-block">
            <a
              href="https://opensea.io/collection/cosmiclabs"
              rel="noopener"
              target="_blank"
              className="nav-link"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDBDOC45NTYgMCAwIDguOTU2IDAgMjBDMCAzMS4wNDQgOC45NTYgNDAgMjAgNDBDMzEuMDQ0IDQwIDQwIDMxLjA0NCA0MCAyMEM0MCA4Ljk1NiAzMS4wNDggMCAyMCAwWk05Ljg2OCAyMC42NzJMOS45NTIgMjAuNTM2TDE1LjE1NiAxMi4zOTZDMTUuMjMyIDEyLjI4IDE1LjQxMiAxMi4yOTIgMTUuNDY4IDEyLjQyQzE2LjMzNiAxNC4zNjggMTcuMDg4IDE2Ljc5MiAxNi43MzYgMTguM0MxNi41ODggMTguOTIgMTYuMTc2IDE5Ljc2IDE1LjcxMiAyMC41MzZDMTUuNjUyIDIwLjY0OCAxNS41ODggMjAuNzYgMTUuNTE2IDIwLjg2OEMxNS40ODQgMjAuOTE2IDE1LjQyOCAyMC45NDQgMTUuMzY4IDIwLjk0NEgxMC4wMkM5Ljg3NiAyMC45NDQgOS43OTIgMjAuNzg4IDkuODY4IDIwLjY3MlpNMzMuMDU2IDIzLjQ3MkMzMy4wNTYgMjMuNTQ4IDMzLjAxMiAyMy42MTIgMzIuOTQ4IDIzLjY0QzMyLjU0NCAyMy44MTIgMzEuMTY0IDI0LjQ0OCAzMC41OTIgMjUuMjQ0QzI5LjEyOCAyNy4yOCAyOC4wMTIgMzAuMTkyIDI1LjUxMiAzMC4xOTJIMTUuMDg4QzExLjM5MiAzMC4xOTIgOC40IDI3LjE4OCA4LjQgMjMuNDhWMjMuMzZDOC40IDIzLjI2NCA4LjQ4IDIzLjE4NCA4LjU4IDIzLjE4NEgxNC4zODhDMTQuNTA0IDIzLjE4NCAxNC41ODggMjMuMjg4IDE0LjU4IDIzLjQwNEMxNC41MzYgMjMuNzggMTQuNjA4IDI0LjE2OCAxNC43ODggMjQuNTJDMTUuMTMyIDI1LjIyIDE1Ljg0OCAyNS42NTYgMTYuNjIgMjUuNjU2SDE5LjQ5NlYyMy40MTJIMTYuNjUyQzE2LjUwOCAyMy40MTIgMTYuNDIgMjMuMjQ0IDE2LjUwNCAyMy4xMjRDMTYuNTM2IDIzLjA3NiAxNi41NjggMjMuMDI4IDE2LjYwOCAyMi45NzJDMTYuODc2IDIyLjU4OCAxNy4yNiAyMS45OTYgMTcuNjQ0IDIxLjMyQzE3LjkwNCAyMC44NjQgMTguMTU2IDIwLjM3NiAxOC4zNiAxOS44ODhDMTguNCAxOS44IDE4LjQzMiAxOS43MDggMTguNDY4IDE5LjYyQzE4LjUyNCAxOS40NjQgMTguNTggMTkuMzE2IDE4LjYyIDE5LjE3MkMxOC42NiAxOS4wNDggMTguNjk2IDE4LjkyIDE4LjcyOCAxOC44QzE4LjgyNCAxOC4zODQgMTguODY0IDE3Ljk0NCAxOC44NjQgMTcuNDg4QzE4Ljg2NCAxNy4zMDggMTguODU2IDE3LjEyIDE4Ljg0IDE2Ljk0NEMxOC44MzIgMTYuNzQ4IDE4LjgwOCAxNi41NTIgMTguNzg0IDE2LjM1NkMxOC43NjggMTYuMTg0IDE4LjczNiAxNi4wMTIgMTguNzA0IDE1LjgzNkMxOC42NiAxNS41NzYgMTguNjA0IDE1LjMxNiAxOC41NCAxNS4wNTZMMTguNTE2IDE0Ljk1NkMxOC40NjggMTQuNzc2IDE4LjQyNCAxNC42MDggMTguMzY4IDE0LjQyOEMxOC4yMDQgMTMuODY4IDE4LjAyIDEzLjMyIDE3LjgyIDEyLjgwOEMxNy43NDggMTIuNjA0IDE3LjY2OCAxMi40MDggMTcuNTg0IDEyLjIxNkMxNy40NjQgMTEuOTIgMTcuMzQgMTEuNjUyIDE3LjIyOCAxMS40QzE3LjE2OCAxMS4yODQgMTcuMTIgMTEuMTggMTcuMDcyIDExLjA3MkMxNy4wMTYgMTAuOTUyIDE2Ljk2IDEwLjgzMiAxNi45IDEwLjcxNkMxNi44NiAxMC42MjggMTYuODEyIDEwLjU0NCAxNi43OCAxMC40NjRMMTYuNDI4IDkuODE2QzE2LjM4IDkuNzI4IDE2LjQ2IDkuNjIgMTYuNTU2IDkuNjQ4TDE4Ljc1NiAxMC4yNDRIMTguNzY0QzE4Ljc2OCAxMC4yNDQgMTguNzY4IDEwLjI0NCAxOC43NzIgMTAuMjQ0TDE5LjA2IDEwLjMyOEwxOS4zOCAxMC40MTZMMTkuNDk2IDEwLjQ0OFY5LjE0NEMxOS40OTYgOC41MTIgMjAgOCAyMC42MjggOEMyMC45NCA4IDIxLjIyNCA4LjEyOCAyMS40MjQgOC4zMzZDMjEuNjI4IDguNTQ0IDIxLjc1NiA4LjgyOCAyMS43NTYgOS4xNDRWMTEuMDg0TDIxLjk5MiAxMS4xNDhDMjIuMDA4IDExLjE1NiAyMi4wMjggMTEuMTY0IDIyLjA0NCAxMS4xNzZDMjIuMSAxMS4yMTYgMjIuMTg0IDExLjI4IDIyLjI4OCAxMS4zNkMyMi4zNzIgMTEuNDI0IDIyLjQ2IDExLjUwNCAyMi41NjQgMTEuNTg4QzIyLjc3NiAxMS43NiAyMy4wMzIgMTEuOTggMjMuMzA4IDEyLjIzMkMyMy4zOCAxMi4yOTYgMjMuNDUyIDEyLjM2IDIzLjUyIDEyLjQyOEMyMy44NzYgMTIuNzYgMjQuMjc2IDEzLjE0OCAyNC42NiAxMy41OEMyNC43NjggMTMuNzA0IDI0Ljg3MiAxMy44MjQgMjQuOTggMTMuOTU2QzI1LjA4NCAxNC4wODggMjUuMiAxNC4yMTYgMjUuMjk2IDE0LjM0NEMyNS40MjggMTQuNTE2IDI1LjU2NCAxNC42OTYgMjUuNjg4IDE0Ljg4NEMyNS43NDQgMTQuOTcyIDI1LjgxMiAxNS4wNjQgMjUuODY0IDE1LjE1MkMyNi4wMjQgMTUuMzg4IDI2LjE2IDE1LjYzMiAyNi4yOTIgMTUuODc2QzI2LjM0OCAxNS45ODggMjYuNDA0IDE2LjExMiAyNi40NTIgMTYuMjMyQzI2LjYgMTYuNTYgMjYuNzE2IDE2Ljg5MiAyNi43ODggMTcuMjI4QzI2LjgxMiAxNy4zIDI2LjgyOCAxNy4zNzYgMjYuODM2IDE3LjQ0OFYxNy40NjRDMjYuODYgMTcuNTYgMjYuODY4IDE3LjY2NCAyNi44NzYgMTcuNzcyQzI2LjkwOCAxOC4xMTIgMjYuODkyIDE4LjQ1NiAyNi44MiAxOC44QzI2Ljc4OCAxOC45NDQgMjYuNzQ4IDE5LjA4IDI2LjcgMTkuMjI4QzI2LjY0OCAxOS4zNjggMjYuNiAxOS41MTIgMjYuNTM2IDE5LjY1MkMyNi40MTIgMTkuOTM2IDI2LjI2OCAyMC4yMjQgMjYuMDk2IDIwLjQ4OEMyNi4wNCAyMC41ODggMjUuOTcyIDIwLjY5MiAyNS45MDggMjAuNzkyQzI1LjgzNiAyMC44OTYgMjUuNzYgMjAuOTk2IDI1LjY5NiAyMS4wOTJDMjUuNjA0IDIxLjIxNiAyNS41MDggMjEuMzQ0IDI1LjQwOCAyMS40NkMyNS4zMiAyMS41OCAyNS4yMzIgMjEuNyAyNS4xMzIgMjEuODA4QzI0Ljk5NiAyMS45NzIgMjQuODY0IDIyLjEyNCAyNC43MjQgMjIuMjcyQzI0LjY0NCAyMi4zNjggMjQuNTU2IDIyLjQ2OCAyNC40NjQgMjIuNTU2QzI0LjM3NiAyMi42NTYgMjQuMjg0IDIyLjc0NCAyNC4yMDQgMjIuODI0QzI0LjA2NCAyMi45NjQgMjMuOTUyIDIzLjA2OCAyMy44NTYgMjMuMTZMMjMuNjI4IDIzLjM2NEMyMy41OTYgMjMuMzk2IDIzLjU1MiAyMy40MTIgMjMuNTA4IDIzLjQxMkgyMS43NTZWMjUuNjU2SDIzLjk2QzI0LjQ1MiAyNS42NTYgMjQuOTIgMjUuNDg0IDI1LjMgMjUuMTZDMjUuNDI4IDI1LjA0OCAyNS45OTIgMjQuNTYgMjYuNjYgMjMuODI0QzI2LjY4NCAyMy43OTYgMjYuNzEyIDIzLjc4IDI2Ljc0NCAyMy43NzJMMzIuODI4IDIyLjAxMkMzMi45NDQgMjEuOTggMzMuMDU2IDIyLjA2NCAzMy4wNTYgMjIuMTg0VjIzLjQ3MloiIGZpbGw9IiMyMDgxRTIiLz4KPC9zdmc+Cg=="
                loading="lazy"
                alt="opeansea"
              />
            </a>
          </li>
          <li className="nav-item social-link w-inline-block">
            <a
              href="https://Discord.gg/CosmicLabsNFT"
              rel="noopener"
              target="_blank"
              className="nav-link"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMzLjMgOC42MTU2MkMzMC4xMTU2IDYuMDUzMTIgMjUuMDc4MSA1LjYxODc0IDI0Ljg2MjUgNS42MDMxMkMyNC41MjgxIDUuNTc0OTkgMjQuMjA5NCA1Ljc2MjQ5IDI0LjA3MTkgNi4wNzE4N0MyNC4wNTk0IDYuMDkwNjIgMjMuOTUgNi4zNDM3NCAyMy44MjgxIDYuNzM3NDlDMjUuOTM0NCA3LjA5Mzc0IDI4LjUyMTkgNy44MDkzNyAzMC44NjI1IDkuMjYyNDlDMzEuMjM3NSA5LjQ5Mzc0IDMxLjM1MzEgOS45ODc0OSAzMS4xMjE5IDEwLjM2MjVDMzAuOTY4NyAxMC42MDk0IDMwLjcwOTQgMTAuNzQzNyAzMC40NDA2IDEwLjc0MzdDMzAuMjk2OSAxMC43NDM3IDMwLjE1IDEwLjcwMzEgMzAuMDE4NyAxMC42MjE5QzI1Ljk5MzcgOC4xMjQ5OSAyMC45Njg3IDcuOTk5OTkgMjAgNy45OTk5OUMxOS4wMzEyIDcuOTk5OTkgMTQuMDAzMSA4LjEyNDk5IDkuOTgxMjMgMTAuNjIxOUM5LjYwNjIzIDEwLjg1NjIgOS4xMTI0OCAxMC43NDA2IDguODgxMjMgMTAuMzY1NkM4LjY0Njg1IDkuOTg3NDkgOC43NjI0OCA5LjQ5Njg3IDkuMTM3NDggOS4yNjI0OUMxMS40NzgxIDcuODEyNDkgMTQuMDY1NiA3LjA5Mzc0IDE2LjE3MTkgNi43NDA2MkMxNi4wNSA2LjM0Mzc0IDE1Ljk0MDYgNi4wOTM3NCAxNS45MzEyIDYuMDcxODdDMTUuNzkwNiA1Ljc2MjQ5IDE1LjQ3NSA1LjU2ODc0IDE1LjEzNzUgNS42MDMxMkMxNC45MjE5IDUuNjE4NzQgOS44ODQzNSA2LjA1MzEyIDYuNjU2MjMgOC42NDk5OUM0Ljk3MTg1IDEwLjIwOTQgMS41OTk5OCAxOS4zMjE5IDEuNTk5OTggMjcuMkMxLjU5OTk4IDI3LjM0MDYgMS42Mzc0OCAyNy40NzUgMS43MDYyMyAyNy41OTY5QzQuMDMxMjMgMzEuNjg0NCAxMC4zNzgxIDMyLjc1MzEgMTEuODI1IDMyLjhDMTEuODMxMiAzMi44IDExLjg0MDYgMzIuOCAxMS44NSAzMi44QzEyLjEwNjIgMzIuOCAxMi4zNDY5IDMyLjY3ODEgMTIuNDk2OSAzMi40NzE5TDEzLjk1OTQgMzAuNDU5NEMxMC4wMTI1IDI5LjQ0MDYgNy45OTY4NSAyNy43MDk0IDcuODgxMjMgMjcuNjA2MkM3LjU0OTk4IDI3LjMxNTYgNy41MTg3MyAyNi44MDk0IDcuODEyNDggMjYuNDc4MUM4LjEwMzEgMjYuMTQ2OSA4LjYwOTM1IDI2LjExNTYgOC45NDA2IDI2LjQwNjJDOC45ODc0OCAyNi40NSAxMi43IDI5LjYgMjAgMjkuNkMyNy4zMTI1IDI5LjYgMzEuMDI1IDI2LjQzNzUgMzEuMDYyNSAyNi40MDYyQzMxLjM5MzcgMjYuMTE4NyAzMS44OTY5IDI2LjE0NjkgMzIuMTkwNiAyNi40ODEyQzMyLjQ4MTIgMjYuODEyNSAzMi40NSAyNy4zMTU2IDMyLjExODcgMjcuNjA2MkMzMi4wMDMxIDI3LjcwOTQgMjkuOTg3NSAyOS40NDA2IDI2LjA0MDYgMzAuNDU5NEwyNy41MDMxIDMyLjQ3MTlDMjcuNjUzMSAzMi42NzgxIDI3Ljg5MzcgMzIuOCAyOC4xNSAzMi44QzI4LjE1OTQgMzIuOCAyOC4xNjg3IDMyLjggMjguMTc1IDMyLjhDMjkuNjIxOSAzMi43NTMxIDM1Ljk2ODcgMzEuNjg0NCAzOC4yOTM3IDI3LjU5NjlDMzguMzYyNSAyNy40NzUgMzguNCAyNy4zNDA2IDM4LjQgMjcuMkMzOC40IDE5LjMyMTkgMzUuMDI4MSAxMC4yMDk0IDMzLjMgOC42MTU2MlpNMTQuOCAyNEMxMy4yNTMxIDI0IDEyIDIyLjU2ODcgMTIgMjAuOEMxMiAxOS4wMzEyIDEzLjI1MzEgMTcuNiAxNC44IDE3LjZDMTYuMzQ2OSAxNy42IDE3LjYgMTkuMDMxMiAxNy42IDIwLjhDMTcuNiAyMi41Njg3IDE2LjM0NjkgMjQgMTQuOCAyNFpNMjUuMiAyNEMyMy42NTMxIDI0IDIyLjQgMjIuNTY4NyAyMi40IDIwLjhDMjIuNCAxOS4wMzEyIDIzLjY1MzEgMTcuNiAyNS4yIDE3LjZDMjYuNzQ2OSAxNy42IDI4IDE5LjAzMTIgMjggMjAuOEMyOCAyMi41Njg3IDI2Ljc0NjkgMjQgMjUuMiAyNFoiIGZpbGw9IiM3Mjg5ZGEiLz4KPC9zdmc+Cg=="
                loading="lazy"
                alt="discord"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}