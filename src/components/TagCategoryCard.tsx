import type { ITagCategory } from '../interfaces/interfaces';
import styles from '../styles/Card.module.scss';

type Props = {
  category: ITagCategory;
  onEdit: (item: ITagCategory) => void;
  onDelete: (id: string) => void;
};

const TagCategoryCard = ({ category, onEdit, onDelete }: Props) => {

    const handleDeleteClick = () => {
    if (window.confirm(`Are you sure you want to delete "${category.name}"?`)) {
      onDelete(category.id);
    }
  };

  return (
    <div className={styles.card}>
      <h3>{category.name}</h3>
      <p><strong>Status:</strong> {category.status}</p>
      <p><strong>Precision Type:</strong> {category.precisionType}</p>
      <p><strong>Group:</strong> {category.group.label}</p>

      {/* {category.metadataConfig?.length > 0 && (
        <ul>
          {category.metadataConfig.map((meta, index) => (
            <li key={index}>{meta.label}</li>
          ))}
        </ul>
      )} */}

      <div className={styles.buttons}>
        <button onClick={() => onEdit(category)}>Edit</button>
        <button onClick={() => handleDeleteClick()}>Delete</button>
      </div>
    </div>
  );
};

export default TagCategoryCard;
