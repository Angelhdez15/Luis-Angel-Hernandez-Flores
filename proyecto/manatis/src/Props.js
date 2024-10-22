function Card({ children, title }) {
    return (
      <div className="card">
        <div className="card-content">
          <h1>{title}</h1>
          {children}
        </div>
      </div>
    );
  }
  
  export default function Profile() {
    return (
      <div>
        <Card title="imagen">
          <img
            className="avatar"
            src="https://i.imgur.com/OKS67lhm.jpg"
            alt="Aklilu Lemma"
            width={100}
            height={100}
          />
        </Card>
        <Card title="Acerca de">
          <p>Aklilu Lemma fue un distinguido científico etíope que descubrió un tratamiento natural para la esquistosomiasis..</p>
        </Card>
      </div>
    );
  }