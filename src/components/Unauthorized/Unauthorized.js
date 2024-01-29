import { useNavigate } from 'react-router-dom';

function Unauthorized() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <sectione>
      <h1>Unautorized</h1>
      <p>You do not have access to the requested page.</p>
      <div >
        <button onClick={goBack}>Go Back</button>
      </div>
    </sectione>
  );
}
export default Unauthorized;
