'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import Input from '../Input';
import ImageInput from '@/components/ImageInput';

export default function PeopleForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      photo,
      contact: {
        phone,
        website,
        social: {
          facebook,
          instagram,
          linkedin,
        },
        email,
      },
      position,
    };

    try {
      setUploading(true);

      const res = await fetch('/api/v1/people', {
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
      setPhoto('');
      setEmail('');
      setFacebook('');
      setInstagram('');
      setLinkedin('');
      setPhone('');
      setWebsite('');
      setPosition('');
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <>
      <div className="text-3xl font-bold text-blue-600 justify-center flex">
        ADD People
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 p-4">
        <Input
          label={'Name'}
          placeholder="John Doe"
          value={name}
          setValue={setName}
        />
        <label>
          Profile Picture:
          <ImageInput
            value={photo}
            setValue={setPhoto}
            setUploading={setUploading}
          />
        </label>
        <Input
          label={'Phone'}
          placeholder="John Doe"
          value={phone}
          setValue={setPhone}
        />

        <Input
          label={'Website'}
          placeholder="John Doe"
          value={website}
          setValue={setWebsite}
        />

        <div>
          <label>Social Links:</label>
          <div className="space-y-2">
            <Input
              placeholder="Facebook URL"
              value={facebook}
              setValue={setFacebook}
            />
            <Input
              placeholder="Instagram URL"
              value={instagram}
              setValue={setInstagram}
            />
            <Input
              placeholder="LinkedIn URL"
              value={linkedin}
              setValue={setLinkedin}
            />
          </div>
        </div>

        <Input
          type="email"
          label={'Email'}
          placeholder="baula@paagal.com"
          value={email}
          setValue={setEmail}
        />

        <Input
          label={'Position'}
          placeholder="rastrapati"
          value={position}
          setValue={setPosition}
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
