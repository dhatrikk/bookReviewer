import { useEffect, useState, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { LayoutGrid, Loader2, PlusCircle, Table } from "lucide-react";
import { DataTable } from "@/components/DataTable";
import { bookColumns } from "@/components/bookColumns";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userRoleAtom } from "@/atoms/userData";
import { pageTitleAtom } from "@/atoms/meta";
import BookCard from "@/components/BookCard";
import booksData from "@/assets/books.json";

const Homepage = () => {
  const role = useRecoilValue(userRoleAtom);
  const navigate = useNavigate();
  const setPageTitle = useSetRecoilState(pageTitleAtom);

  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setPageTitle("ReviewNest");
    // simulate loading
    setTimeout(() => {
      setBooks(booksData);
      setIsLoading(false);
    }, 300);
  }, []);

  return (
    <main className="grid items-start flex-1 p-2 sm:px-4 md:gap-8">
      <Tabs defaultValue="block">
        <div className="flex items-center px-2 pt-2">
          <TabsList>
            <TabsTrigger value="block" className="flex gap-2">
              <LayoutGrid size={20} /> Block
            </TabsTrigger>
            <TabsTrigger value="table" className="flex gap-2">
              <Table size={20} /> Table
            </TabsTrigger>
          </TabsList>

          {role === "admin" && (
            <div className="flex items-center gap-2 ml-auto">
              <Button variant="outline" className="h-10 gap-2" onClick={() => navigate("add")}>
                <PlusCircle size={20} /> Add Book
              </Button>
            </div>
          )}
        </div>

        <TabsContent value="block">
          {isLoading ? (
            <Loader2 className="w-10 h-10 mx-auto animate-spin" />
          ) : (
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4">
              {books.map((book) => (
                <Suspense key={book.id || book._id} fallback={<>loading...</>}>
                  <BookCard book={book} />
                </Suspense>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="table">
          <DataTable searchBy="title" columns={bookColumns} data={books} />
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default Homepage;
