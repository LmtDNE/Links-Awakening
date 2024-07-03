import React, { useState } from 'react';
import { LinkCard } from './LinkCard';

export const LinkManager = () => {
  const [links, setLinks] = useState([]);
  const [form, setForm] = useState({
    title: '',
    url: '',
    description: '',
    category: '',
  });
  const [filter, setFilter] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addLink = () => {
    if (isValidUrl(form.url)) {
      const newLink = { ...form, id: Date.now() };
      setLinks([...links, newLink]);
      setForm({ title: '', url: '', description: '', category: '' });
    } else {
      console.error('Invalid Url pattern');
    }
  };

  const isValidUrl = (url) => {
    const urlPattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i',
    ); // fragment locator
    return !!urlPattern.test(url);
  };

  const filteredLinks = links.filter((link) => {
    if (filter.length === 0) {
      return link;
    } else {
      return link;
    }
  });
  console.log('What is filteredlink', filteredLinks);

  return (
    <div>
      <div>Enter Link Information Here</div>
      <input
        type="text"
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <input
        type="text"
        name="url"
        value={form.url}
        onChange={handleChange}
        placeholder="URL"
      />
      <input
        type="text"
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        type="text"
        name="category"
        value={form.category}
        onChange={handleChange}
        placeholder="Category"
      />
      <button onClick={addLink}>Add Link</button>

      <input
        type="text"
        name="filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter by Category"
      />

      {filteredLinks.map((link) => (
        <LinkCard key={link.id} link={link} />
      ))}
    </div>
  );
};
