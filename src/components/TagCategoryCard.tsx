import type { ITagCategory } from '../interfaces/interfaces';
import styles from '../styles/Card.module.scss';

type Props = {
  category: ITagCategory;
  onEdit: (item: ITagCategory) => void;
  onDelete: (id: string) => void;
};

const TagCategoryCard = ({ category, onEdit, onDelete }: Props) => {
  return (
    <div className={styles.card}>
      <h3>{category.name}</h3>
      <p>Status: {category.status}</p>
      <p>Group: {category.group.label}</p>
      <p>Precision: {category.precisionType}</p>
      <button onClick={() => onEdit(category)}>Edit</button>
      <button onClick={() => onDelete(category.id)}>Delete</button>
    </div>
  );
}

export default TagCategoryCard