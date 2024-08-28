// import { useEffect, useState } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import { cores } from "../assets/cores";
// import { CustomNav } from "../components/CustomNav";
// import { useCabecalhoContext } from "../context/CabecalhoContext";

// import { Rotas } from "./Rotas";

// export function Header() {
//   const { updateCurrentNav, currentNav, isVisible, removeVisibility } =
//     useCabecalhoContext();

//   const location = useLocation();

//   useEffect(() => {
//     updateCurrentNav(location.pathname);
//     if (location.pathname == Rotas.HOME) removeVisibility();
//   }, [location, currentNav]);

//   if (isVisible)
//     return (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           width: "100%",
//           padding: 15,
//           paddingLeft: 25,
//           paddingRight: 25,
//           backgroundColor: cores.navbarColor,
//           height: 100,
//           position: "fixed",
//           zIndex: Zindex.HEADER,
//           top: 0,
//           left: 0,
//           right: 0,
//         }}
//       >
//         <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//           <NavLink to={Rotas.USER_AREA}>
//             {
//               <CustomNav
//                 titulo={"Pitsfy"}
//                 isActive={currentNav == Rotas.USER_AREA}
//               />
//             }
//           </NavLink>
//           <p style={{ color: "#fff" }}>
//             {AppUtils.getEmojiBasedOnTime()}{" "}
//             {localStorage.getItem(LocalStorageKeys.NOME)}
//           </p>
//         </div>

//         <div style={{ display: "flex", columnGap: 45, alignItems: "center" }}>
//           <NavLink to={Rotas.MY_APPS}>
//             {
//               <CustomNav
//                 titulo={"Meus aplicativos"}
//                 isActive={currentNav.includes(Rotas.MY_APPS)}
//               />
//             }
//           </NavLink>

//           <NavLink
//             to={Rotas.LOGIN}
//             onClick={() => {
//               localStorage.clear();
//             }}
//           >
//             {<CustomNav titulo={"Encerrar sessão"} isActive={false} />}
//           </NavLink>
//         </div>
//       </div>
//     );
//   else return null;
// }

// export const getOut = () => {
//   localStorage.clear();
//   window.location.href = Rotas.LOGIN;
// };
