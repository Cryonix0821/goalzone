import { useEffect, useState } from "react";
import { supabase } from "./lib/supabaseClient";
import "./index.css";
const worldCupGroups = [
  {
    group: "Group A",
    teams: [
      { name: "Mexico", flag: "https://flagcdn.com/w40/mx.png" },
      { name: "South Africa", flag: "https://flagcdn.com/w40/za.png" },
      { name: "South Corea", flag: "https://flagcdn.com/w40/kr.png" },
      { name: "Czechia", flag: "https://flagcdn.com/w40/cz.png" },
    ],
  },
  {
    group: "Group B",
    teams: [
      { name: "Canada", flag: "https://flagcdn.com/w40/ca.png" },
      { name: "Bosnia", flag: "https://flagcdn.com/w40/ba.png" },
      { name: "Catar", flag: "https://flagcdn.com/w40/qa.png" },
      { name: "Swiss", flag: "https://flagcdn.com/w40/ch.png" },
    ],
  },
  {
    group: "Group C",
    teams: [
      { name: "Brasil", flag: "https://flagcdn.com/w40/br.png" },
      { name: "Morocco", flag: "https://flagcdn.com/w40/ma.png" },
      { name: "Haiti", flag: "https://flagcdn.com/w40/ht.png" },
      { name: "Scotland", flag: "https://flagcdn.com/w40/gb-sct.png" },
    ],
  },
  {
    group: "Group D",
    teams: [
      { name: "USA", flag: "https://flagcdn.com/w40/us.png" },
      { name: "Paraguay", flag: "https://flagcdn.com/w40/py.png" },
      { name: "Australia", flag: "https://flagcdn.com/w40/au.png" },
      { name: "Türkiye", flag: "https://flagcdn.com/w40/tr.png" },
    ],
  },
];

const matchday1 = [
  {
    group: "Group A",
    games: [
      {
        date: "11/6/26",
        hour: "14:00",
        team1: { name: "Mexico", flag: "https://flagcdn.com/w40/mx.png" },
        team2: { name: "South Africa", flag: "https://flagcdn.com/w40/za.png" },
      },
      {
        date: "11/6/26",
        hour: "21:00",
        team1: { name: "South Corea", flag: "https://flagcdn.com/w40/kr.png" },
        team2: { name: "Czechia", flag: "https://flagcdn.com/w40/cz.png" },
      },
    ],
  },
  {
    group: "Group B",
    games: [
      {
        date: "12/6/26",
        hour: "14:00",
        team1: { name: "Canada", flag: "https://flagcdn.com/w40/ca.png" },
        team2: { name: "Bosnia", flag: "https://flagcdn.com/w40/ba.png" },
      },
      {
        date: "13/6/26",
        hour: "14:00",
        team1: { name: "Catar", flag: "https://flagcdn.com/w40/qa.png" },
        team2: { name: "Swiss", flag: "https://flagcdn.com/w40/ch.png" },
      },
    ],
  },
  {
    group: "Group C",
    games: [
      {
        date: "13/6/26",
        hour: "17:00",
        team1: { name: "Brasil", flag: "https://flagcdn.com/w40/br.png" },
        team2: { name: "Morocco", flag: "https://flagcdn.com/w40/ma.png" },
      },
      {
        date: "13/6/26",
        hour: "20:00",
        team1: { name: "Haiti", flag: "https://flagcdn.com/w40/ht.png" },
        team2: { name: "Scotland", flag: "https://flagcdn.com/w40/gb-sct.png" },
      },
    ],
  },
  {
    group: "Group D",
    games: [
      {
        date: "12/6/26",
        hour: "20:00",
        team1: { name: "USA", flag: "https://flagcdn.com/w40/us.png" },
        team2: { name: "Paraguay", flag: "https://flagcdn.com/w40/py.png" },
      },
      {
        date: "13/6/26",
        hour: "23:00",
        team1: { name: "Australia", flag: "https://flagcdn.com/w40/au.png" },
        team2: { name: "Türkiye", flag: "https://flagcdn.com/w40/tr.png" },
      },
    ],
  },
];

const matchday2 = [
  {
    group: "Group A",
    games: [
      {
        date: "18/6/26",
        hour: "17:00",
        team1: { name: "Czechia", flag: "https://flagcdn.com/w40/cz.png" },
        team2: { name: "South Africa", flag: "https://flagcdn.com/w40/za.png" },
      },
      {
        date: "19/6/26",
        hour: "20:00",
        team1: { name: "Mexico", flag: "https://flagcdn.com/w40/mx.png" },
        team2: { name: "South Corea", flag: "https://flagcdn.com/w40/kr.png" },
      },
    ],
  },
  {
    group: "Group B",
    games: [
      {
        date: "18/6/26",
        hour: "14:00",
        team1: { name: "Swiss", flag: "https://flagcdn.com/w40/ch.png" },
        team2: { name: "Bosnia", flag: "https://flagcdn.com/w40/ba.png" },
      },
      {
        date: "19/6/26",
        hour: "23:00",
        team1: { name: "Canada", flag: "https://flagcdn.com/w40/ca.png" },
        team2: { name: "Catar", flag: "https://flagcdn.com/w40/qa.png" },
      },
    ],
  },
  {
    group: "Group C",
    games: [
      {
        date: "20/6/26",
        hour: "17:00",
        team1: { name: "Scotland", flag: "https://flagcdn.com/w40/gb-sct.png" },
        team2: { name: "Morocco", flag: "https://flagcdn.com/w40/ma.png" },
      },
      {
        date: "20/6/26",
        hour: "22:00",
        team1: { name: "Brasil", flag: "https://flagcdn.com/w40/br.png" },
        team2: { name: "Haiti", flag: "https://flagcdn.com/w40/ht.png" },
      },
    ],
  },
  {
    group: "Group D",
    games: [
      {
        date: "20/6/26",
        hour: "14:00",
        team1: { name: "USA", flag: "https://flagcdn.com/w40/us.png" },
        team2: { name: "Australia", flag: "https://flagcdn.com/w40/au.png" },
      },
      {
        date: "21/6/26",
        hour: "20:00",
        team1: { name: "Türkiye", flag: "https://flagcdn.com/w40/tr.png" },
        team2: { name: "Paraguay", flag: "https://flagcdn.com/w40/py.png" },
      },
    ],
  },
];

const matchday3 = [
  {
    group: "Group A",
    games: [
      {
        date: "25/6/26",
        hour: "20:00",
        team1: { name: "South Africa", flag: "https://flagcdn.com/w40/za.png" },
        team2: { name: "South Corea", flag: "https://flagcdn.com/w40/kr.png" },
      },
      {
        date: "25/6/26",
        hour: "20:00",
        team1: { name: "Mexico", flag: "https://flagcdn.com/w40/mx.png" },
        team2: { name: "Czechia", flag: "https://flagcdn.com/w40/cz.png" },
      },
    ],
  },
  {
    group: "Group B",
    games: [
      {
        date: "26/6/26",
        hour: "20:00",
        team1: { name: "Bosnia", flag: "https://flagcdn.com/w40/ba.png" },
        team2: { name: "Catar", flag: "https://flagcdn.com/w40/qa.png" },
      },
      {
        date: "26/6/26",
        hour: "20:00",
        team1: { name: "Canada", flag: "https://flagcdn.com/w40/ca.png" },
        team2: { name: "Swiss", flag: "https://flagcdn.com/w40/ch.png" },
      },
    ],
  },
  {
    group: "Group C",
    games: [
      {
        date: "27/6/26",
        hour: "20:00",
        team1: { name: "Morocco", flag: "https://flagcdn.com/w40/ma.png" },
        team2: { name: "Haiti", flag: "https://flagcdn.com/w40/ht.png" },
      },
      {
        date: "27/6/26",
        hour: "20:00",
        team1: { name: "Brasil", flag: "https://flagcdn.com/w40/br.png" },
        team2: { name: "Scotland", flag: "https://flagcdn.com/w40/gb-sct.png" },
      },
    ],
  },
  {
    group: "Group D",
    games: [
      {
        date: "27/6/26",
        hour: "20:00",
        team1: { name: "Paraguay", flag: "https://flagcdn.com/w40/py.png" },
        team2: { name: "Australia", flag: "https://flagcdn.com/w40/au.png" },
      },
      {
        date: "27/6/26",
        hour: "20:00",
        team1: { name: "USA", flag: "https://flagcdn.com/w40/us.png" },
        team2: { name: "Türkiye", flag: "https://flagcdn.com/w40/tr.png" },
      },
    ],
  },
];

const matchdays = {
  "Day 1": matchday1,
  "Day 2": matchday2,
  "Day 3": matchday3,
};

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [favorite, setFavorite] = useState(false);
  const [selectedYear, setSelectedYear] = useState("2026");
  const [selectedTab, setSelectedTab] = useState("clasificaciones");
  const [selectedMatchday, setSelectedMatchday] = useState("Day 1");
  const [loggedUser, setLoggedUser] = useState(null);
  const [showUserMenu, setShowUserMenu] = useState(false);

    useEffect(() => {
    async function loadCurrentUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setLoggedUser(user);
    }

    loadCurrentUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setLoggedUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  function getUserAvatarColor(email) {
  const colors = [
    "linear-gradient(135deg, #8c94ff, #6d5dfc)",
    "linear-gradient(135deg, #22c55e, #15803d)",
    "linear-gradient(135deg, #f97316, #c2410c)",
    "linear-gradient(135deg, #ec4899, #be185d)",
    "linear-gradient(135deg, #06b6d4, #0e7490)",
    "linear-gradient(135deg, #eab308, #a16207)",
    "linear-gradient(135deg, #a855f7, #7e22ce)",
    "linear-gradient(135deg, #ef4444, #991b1b)",
  ];

  if (!email) return colors[0];

  let total = 0;

  for (let i = 0; i < email.length; i++) {
    total += email.charCodeAt(i);
  }

  return colors[total % colors.length];
}

  function getUserInitials(email) {
  if (!email) return "U";

  const name = email.split("@")[0];
  return name.slice(0, 2).toUpperCase();
}

    async function handleLogout() {
    await supabase.auth.signOut();

    setLoggedUser(null);
    setShowUserMenu(false);
    setCurrentPage("home");
  }



  return (
    <>
      <header className="topbar">
        <div className="logo">
          <span className="logo-icon"></span>
          <span>GOALZONE</span>
        </div>

        <div className="search-box">
          <span>🔍</span>
          <input
            type="text"
            placeholder="Search for matches, competitions, teams and players"
          />
        </div>

        <div className="user-menu-wrapper">
          <button
            className="action-btn user-btn"
            onClick={() => {
              if (loggedUser) {
                setShowUserMenu(!showUserMenu);
              } else {
                setCurrentPage("login");
              }
            }}
            title="Usuario"
          >
            <span
              className="user-icon"
              style={
                loggedUser
                  ? { background: getUserAvatarColor(loggedUser.email) }
                  : undefined
              }
            >
              {loggedUser
                ? getUserInitials(loggedUser.email)
                : "👤"}
            </span>
          </button>

          {loggedUser && showUserMenu && (
            <div className="user-dropdown">
              <div className="user-profile-card">
                <div
                  className="user-avatar-big"
                  style={{ background: getUserAvatarColor(loggedUser.email) }}
                >
                  {getUserInitials(loggedUser.email)}
                </div>

                <div className="user-profile-info">
                  <h4>Cuenta activa</h4>
                  <p>{loggedUser.email}</p>
                  <span>Sesión iniciada en GoalZone</span>
                </div>
              </div>

              <div className="user-dropdown-line"></div>

              <button className="user-menu-option">
                ⭐ Mis favoritos
              </button>

              <button className="user-menu-option">
                ⚙ Configuración
              </button>

              <button
                className="logout-btn"
                onClick={handleLogout}
              >
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </header>

      <nav className="sports-nav">
        <button>🔥 Tendencies</button>
        <button className="active">🏆 Fifa World Cup</button>
      </nav>

      <main className="layout">
        <aside className="sidebar">
          <section className="matches-panel">
            <div className="round-selector">
              <button>‹</button>

              <select
                value={selectedMatchday}
                onChange={(e) => setSelectedMatchday(e.target.value)}
              >
                <option>Day 1</option>
                <option>Day 2</option>
                <option>Day 3</option>
              </select>

              <button>›</button>
            </div>

            <div className="match-list">
              {matchdays[selectedMatchday].map((group) => (
                <div className="match-group" key={group.group}>
                  <h3>{group.group}</h3>

                  {group.games.map((game, index) => (
                    <div className="match-item" key={`${group.group}-${index}`}>
                      <div className="match-time">
                        <div>{game.date}</div>
                        <div>{game.hour}</div>
                      </div>

                      <div className="teams">
                        <div className="team-row">
                          <img
                            className="side-flag"
                            src={game.team1.flag}
                            alt={game.team1.name}
                          />
                          <span>{game.team1.name}</span>
                        </div>

                        <div className="team-row">
                          <img
                            className="side-flag"
                            src={game.team2.flag}
                            alt={game.team2.name}
                          />
                          <span>{game.team2.name}</span>
                        </div>
                      </div>

                      <div className="star">☆</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        </aside>

        <section className="content">
          <div className="breadcrumb">
            Soccer &gt; World &gt; FIFA World Cup 2026
          </div>

          <section className="hero">
            <div className="trophy">🏆</div>

            <div className="hero-info">
              <h1>World Cup 2026</h1>

              <div className="years">
                {[
                  "2026",
                  "2022",
                  "2018",
                  "2014",
                  "2010",
                  "2006",
                  "2002",
                  "1998",
                  "1994",
                ].map((year) => (
                  <button
                    key={year}
                    className={selectedYear === year ? "active" : ""}
                    onClick={() => setSelectedYear(year)}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            <button
              className="favorite-btn"
              onClick={() => setFavorite(!favorite)}
            >
              {favorite ? "★ FAVORITO" : "☆ FAVORITO"}
            </button>
          </section>

          <section className="timeline">
            <div className="line"></div>

            {["Group Stage", "R32", "R16", "QF", "SF", "Final"].map(
              (step, index) => (
                <div className={`step ${index === 0 ? "active" : ""}`} key={step}>
                  <span></span>
                  <p>{step}</p>
                </div>
              )
            )}
          </section>

          <section className="main-card">
            <div className="section-tabs">
              <button
                className={selectedTab === "clasificaciones" ? "active" : ""}
                onClick={() => setSelectedTab("clasificaciones")}
              >
                Classifications
              </button>

              <button
                className={selectedTab === "eliminatorias" ? "active" : ""}
                onClick={() => setSelectedTab("eliminatorias")}
              >
                Qualifiers
              </button>

              <button
                className={selectedTab === "media" ? "active" : ""}
                onClick={() => setSelectedTab("media")}
              >
                News
              </button>
            </div>

            {selectedTab === "clasificaciones" && (
              <div className="table-box">
                {worldCupGroups.map((group) => (
                  <div key={group.group} className="group-table-block">
                    <h2>{group.group}</h2>

                    <table>
                      <thead>
                        <tr>
                          <th>Team</th>
                          <th>PJ</th>
                          <th>G</th>
                          <th>E</th>
                          <th>P</th>
                          <th>PTS</th>
                        </tr>
                      </thead>

                      <tbody>
                        {group.teams.map((team) => (
                          <tr key={team.name}>
                            <td className="group-team">
                              <img
                                className="group-flag"
                                src={team.flag}
                                alt={team.name}
                              />
                              {team.name}
                            </td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            )}

            {selectedTab === "eliminatorias" && (
              <div className="table-box">
                <h2>Qualifiers</h2>
                <br />
                <p>
                  Here will appear the matchups for the final stage of the World
                  Cup.
                </p>
              </div>
            )}

            {selectedTab === "media" && (
              <div className="news-box">
                <article className="news-card">
                  <h2>World Cup News</h2>
                  <p>
                    Videos, news and tournament content about the teams of the
                    FIFA World Cup 2026.
                  </p>
                </article>

                <article className="news-card">
                  <h2>Updated Fixture</h2>
                  <p>
                    Check the matches by matchday and the teams that compete in
                    each group.
                  </p>
                </article>
              </div>
            )}
          </section>
        </section>
      </main>

      {currentPage === "login" && (
        <LoginPage setCurrentPage={setCurrentPage} />
      )}
    </>
  );
}

function LoginPage({ setCurrentPage }) {
  const [showForm, setShowForm] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState("");
  const [loginMode, setLoginMode] = useState("login");
  const [userInput, setUserInput] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState({
    type: "",
    title: "",
    text: "",
  });
  const [loading, setLoading] = useState(false);

  function openGoalZoneForm(provider) {
    setSelectedProvider(provider);
    setShowForm(true);
    setStatus({ type: "", title: "", text: "" });
  }

  function resetForm() {
    setShowForm(false);
    setSelectedProvider("");
    setUserInput("");
    setPassword("");
    setLoginMode("login");
    setStatus({ type: "", title: "", text: "" });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setStatus({ type: "", title: "", text: "" });

    if (userInput.trim() === "" || password.trim() === "") {
      setStatus({
        type: "error",
        title: "Campos incompletos",
        text: "Ingresa tu correo y contraseña para continuar.",
      });
      return;
    }

    if (!userInput.includes("@")) {
      setStatus({
        type: "error",
        title: "Correo no válido",
        text: "Por ahora usa un correo electrónico. El login con número lo activaremos después.",
      });
      return;
    }

    if (password.length < 6) {
      setStatus({
        type: "error",
        title: "Contraseña muy corta",
        text: "La contraseña debe tener mínimo 6 caracteres.",
      });
      return;
    }

    setLoading(true);

    try {
      if (loginMode === "register") {
        const { error } = await supabase.auth.signUp({
          email: userInput,
          password: password,
          options: {
            data: {
              nombre: "Usuario GoalZone",
              proveedor: selectedProvider,
            },
          },
        });

        if (error) {
          setStatus({
            type: "error",
            title: "No se pudo crear la cuenta",
            text: error.message,
          });
          return;
        }

        setStatus({
          type: "success",
          title: "Cuenta creada correctamente",
          text: "Tu cuenta GoalZone ya fue registrada. Ahora puedes iniciar sesión.",
        });

        setLoginMode("login");
        setPassword("");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: userInput,
          password: password,
        });

        if (error) {
          setStatus({
            type: "error",
            title: "Acceso denegado",
            text: "El correo o la contraseña no coinciden con una cuenta registrada.",
          });
          return;
        }

        setStatus({
          type: "success",
          title: "Acceso autorizado",
          text: "Bienvenido a GoalZone. Estamos preparando tu sesión...",
        });

        setTimeout(() => {
          setCurrentPage("home");
        }, 1600);
      }
    } catch (error) {
      setStatus({
        type: "error",
        title: "Error de conexión",
        text: "No se pudo conectar con el servidor. Intenta nuevamente.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-overlay">
      <section className="login-modal">
        <button
          className="close-login"
          onClick={() => setCurrentPage("home")}
        >
          ✕
        </button>

        <div className="login-modal-left">
          {!showForm ? (
            <>
              <h1>
                Un mundo de
                <br />
                estadísticas al
                <br />
                alcance de tu
                <br />
                mano, gratis.
              </h1>

              <div className="social-login-buttons">
                <button onClick={() => openGoalZoneForm("Google")}>
                  <img
                    className="login-brand-icon"
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                  />
                  <p>Continuar con Google</p>
                </button>

                <button onClick={() => openGoalZoneForm("Facebook")}>
                  <img
                    className="login-brand-icon"
                    src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                    alt="Facebook"
                  />
                  <p>Continuar con Facebook</p>
                </button>

                <button onClick={() => openGoalZoneForm("Apple")}>
                  <img
                    className="login-brand-icon apple-img"
                    src="https://www.svgrepo.com/show/69341/apple-logo.svg"
                    alt="Apple"
                  />
                  <p>Continuar con Apple</p>
                </button>
              </div>

              <p className="login-terms">
                Al continuar, ingresarás al formulario de cuenta de{" "}
                <span>GoalZone</span>.
              </p>
            </>
          ) : (
            <>
              <button className="back-to-options" onClick={resetForm}>
                ← Volver
              </button>

              <div className="login-form-header">
                <h1>
                  {loginMode === "login"
                    ? "Iniciar sesión"
                    : "Crear cuenta"}
                </h1>

                <p>
                  Continuando con <strong>{selectedProvider}</strong>
                </p>
              </div>

              <form className="goalzone-login-form" onSubmit={handleSubmit}>
                <label>Correo</label>
                <input
                  type="email"
                  placeholder="usuario@gmail.com"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                />

                <label>Contraseña</label>
                <input
                  type="password"
                  placeholder="Mínimo 6 caracteres"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                {status.type !== "" && (
                  <div className={`professional-message ${status.type}`}>
                    <div className="message-icon">
                      {status.type === "success" ? "✓" : "!"}
                    </div>

                    <div>
                      <h3>{status.title}</h3>
                      <p>{status.text}</p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="login-submit-btn"
                  disabled={loading}
                >
                  {loading
                    ? "Procesando..."
                    : loginMode === "login"
                    ? "Ingresar"
                    : "Crear cuenta"}
                </button>
              </form>

              <div className="change-login-mode">
                {loginMode === "login" ? (
                  <p>
                    ¿No tienes cuenta?{" "}
                    <button
                      onClick={() => {
                        setLoginMode("register");
                        setStatus({ type: "", title: "", text: "" });
                      }}
                    >
                      Crear cuenta
                    </button>
                  </p>
                ) : (
                  <p>
                    ¿Ya tienes cuenta?{" "}
                    <button
                      onClick={() => {
                        setLoginMode("login");
                        setStatus({ type: "", title: "", text: "" });
                      }}
                    >
                      Iniciar sesión
                    </button>
                  </p>
                )}
              </div>
            </>
          )}
        </div>

        <div className="login-modal-right">
          <div className="corner corner-top-left"></div>
          <div className="corner corner-bottom-right"></div>

          <div className="login-sport-label">
            <h2>Fútbol</h2>
            <span>⚽</span>
          </div>
        </div>
      </section>
    </div>
  );
}
export default App;