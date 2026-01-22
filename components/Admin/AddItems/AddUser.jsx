'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import Input from '../Input';
import ImageInput from '@/components/ImageInput';

export default function UserForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('contributer');
  const [_id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, role, email, password };

    try {
      setUploading(true);

      const res = await fetch('/api/v1/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setUploading(false);

      if (!res.ok) {
        const { message } = await res.json();
        toast.error(message);
        throw new Error(message);
      }
      const result = await res.json();
      console.log('Saved successfully:', result);
      toast.success(result.message);

      setName('');
      setRole('contributer');
      setId('');
      setEmail('');
      setPassword('');
      setUploading(false);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <>
      <div className="text-3xl font-bold text-blue-600 justify-center flex mb-4">
        ADD User
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 p-4">
        <Input
          label={'Name'}
          placeholder="Ram Krishna Aryal"
          value={name}
          setValue={setName}
        />

        <label>
          Role:
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="bg-blue-500/10 w-full p-2 rounded"
          >
            <option value="contributer">Mantri</option>
            <option value="admin">Raja</option>
          </select>
        </label>

        <Input
          type="email"
          label={'Email'}
          placeholder="pagal@baula.com"
          value={email}
          setValue={setEmail}
        />

        <Input
          type="password"
          label={'Password'}
          placeholder="gopya sutra"
          value={password}
          setValue={setPassword}
        />

        <button
          type="submit"
          disabled={uploading}
          className="cursor-pointer mt-2 font-bold bg-blue-600 text-white px-5 py-2 rounded-xl"
        >
          {uploading ? 'Uploading...' : 'Add Item'}
        </button>
      </form>
    </>
  );
}
