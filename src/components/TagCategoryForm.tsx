import React from 'react';
import type { ITagCategory } from '../interfaces/interfaces';
import styles from '../styles/Form.module.scss';

type Props = {
  initialData?: ITagCategory;
  onSubmit: (item: ITagCategory) => void;
  onCancel: () => void;
};

const TagCategoryForm = ({ initialData, onSubmit, onCancel }: Props) => {
  const [form, setForm] = React.useState<ITagCategory>(() => ({
    id: Date.now().toString(),
    name: '',
    gameId: '',
    group: { label: '', value: '' },
    status: 'ACTIVE',
    precisionType: 'LONG',
    isParentTag: false,
    isReplay: false,
    metadataConfig: [],
    subCategories: {},
    nameStructure: [],
    createdAt: Date.now(),
    lastUpdatedAt: Date.now(),
    deleted: false,
    ...(initialData || {})
  }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...form, lastUpdatedAt: Date.now() });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="gameId" value={form.gameId} onChange={handleChange} placeholder="Game ID" required />
      <input
        name="group.label"
        value={form.group.label}
        onChange={e => setForm({ ...form, group: { ...form.group, label: e.target.value } })}
        placeholder="Group Label"
      />
      <button type="submit">{initialData ? 'Update' : 'Create'}</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default TagCategoryForm;