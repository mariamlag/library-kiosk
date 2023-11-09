type Book = {
  id: string;
  title: string;
  about: string;
  isBorrowed: boolean;
};
type User = {
  id: string;
  username: string;
  password: string;
  borrowedBooks: Book[];
};

interface CategoriesProps {
  onSelectCategory: (category: string) => void;
  selectedCategory: string;
}
type TpageButton = {
  active: string;
};
type Tmessage = {
  message: string;
};
