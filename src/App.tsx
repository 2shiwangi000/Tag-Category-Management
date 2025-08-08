import { useState } from 'react';
import { sampleTagCategories } from './data/sampleData';
import type { ITagCategory } from './interfaces/interfaces';
import TagCategoryCard from './components/TagCategoryCard';
import TagCategoryForm from './components/TagCategoryForm';
import styles from './styles/App.module.scss';

function App() {
  const [categories, setCategories] = useState<ITagCategory[]>(sampleTagCategories);
  const [editing, setEditing] = useState<ITagCategory | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleEdit = (item: ITagCategory) => {
    setEditing(item);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    setCategories(prev => prev.filter(c => c.id !== id));
  };

  const handleSave = (item: ITagCategory) => {
    setCategories(prev => {
      const exists = prev.some(c => c.id === item.id);
      if (exists) {
        return prev.map(c => c.id === item.id ? item : c);
      }
      return [...prev, item];
    });
    setEditing(null);
    setShowForm(false);
  };

  // filter by name (case-insensitive)
  const filtered = categories.filter(cat => cat.name.toLowerCase().includes(searchTerm.trim().toLowerCase()));

  return (
    <div className={styles.container}>
      <h1>Tag Categories</h1>
      <div className={styles.layout}>
        <div className={styles.formSection}>
          <button onClick={() => { setShowForm(true); setEditing(null); }}>Add New</button>
          {showForm && (
            <TagCategoryForm
              initialData={editing || undefined}
              onSubmit={handleSave}
              onCancel={() => setShowForm(false)}
            />
          )}
        </div>

        <div className={styles.cardSection}>
          {/* Search on top of the cardSection */}
          <div className={styles.searchRow}>
            <input
              type="text"
              placeholder="Search tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchBar}
            />
            {/* optional: clear button */}
            {searchTerm && (
              <button className={styles.clearBtn} onClick={() => setSearchTerm('')}>
                Clear
              </button>
            )}
          </div>

          {/* cardsGrid holds the cards in grid layout */}
          <div className={styles.cardsGrid}>
            {filtered.map(cat => (
              <TagCategoryCard
                key={cat.id}
                category={cat}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
