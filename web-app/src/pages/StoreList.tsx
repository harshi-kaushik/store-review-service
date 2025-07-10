import { useEffect, useState } from 'react';
import API from '../api/api';

function StoreList() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    async function fetchStores() {
      const res = await API.get('/stores');
      setStores(res.data);
    }
    fetchStores();
  }, []);

  return (
    <div>
      <h2>Stores</h2>
      {stores.map((store: any) => (
        <div key={store.id}>
          <h4>{store.name}</h4>
          <p>{store.address}</p>
          <p>Avg Rating: {store.averageRating?.toFixed(1) ?? 'No ratings yet'}</p>
          {/* Future: Add user rating input */}
        </div>
      ))}
    </div>
  );
}

export default StoreList;
