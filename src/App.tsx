import React from "react";
import { sampleTagCategories } from "./data/sampleData";
import type { ITagCategory } from "./interfaces/interfaces";
import TagCategoryCard from "./components/TagCategoryCard";
import TagCategoryForm from "./components/TagCategoryForm";
import styles from "./styles/App.module.scss";

function App() {
  const [categories, setCategories] =
    React.useState<ITagCategory[]>(sampleTagCategories);
  const [editing, setEditing] = React.useState<ITagCategory | null>(null);
  const [showForm, setShowForm] = React.useState(false);

  const handleEdit = (item: ITagCategory) => {
    setEditing(item);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    setCategories((prev) => prev.filter((c) => c.id !== id));
  };

  const handleSave = (item: ITagCategory) => {
    setCategories((prev) => {
      const exists = prev.some((c) => c.id === item.id);
      if (exists) {
        return prev.map((c) => (c.id === item.id ? item : c));
      }
      return [...prev, item];
    });
    setEditing(null);
    setShowForm(false);
  };

  return (
    <div className={styles.container}>
      <h1>Tag Categories</h1>
      <div className={styles.layout}>
        <div className={styles.formSection}>
          <button
            onClick={() => {
              setShowForm(true);
              setEditing(null);
            }}
          >
            Add New
          </button>
          {showForm && (
            <TagCategoryForm
              initialData={editing || undefined}
              onSubmit={handleSave}
              onCancel={() => setShowForm(false)}
            />
          )}
        </div>
        <div className={styles.cardSection}>
          {categories.map((cat) => (
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
  );
}

export default App;
