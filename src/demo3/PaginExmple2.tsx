import { useEffect, useState } from "react";

enum Status {
    LOADING = 'LOADING',
    LOADED = 'LOADED',
    REJECTED = 'REJECTED',
  }

const PaginExmple2 = () => {
    const books = [
        "To Kill a Mockingbird by Harper Lee",
        "1984 by George Orwell",
        "The Great Gatsby by F. Scott Fitzgerald",
        "One Hundred Years of Solitude by Gabriel Garcia Marquez",
        "Moby Dick by Herman Melville",
        "The Catcher in the Rye by J.D. Salinger",
        "Pride and Prejudice by Jane Austen",
        "The Lord of the Rings by J.R.R. Tolkien",
        "War and Peace by Leo Tolstoy",
        "Crime and Punishment by Fyodor Dostoevsky",
        "The Adventures of Huckleberry Finn by Mark Twain",
        "The Hobbit by J.R.R. Tolkien",
        "The Brothers Karamazov by Fyodor Dostoevsky",
        "Anna Karenina by Leo Tolstoy",
        "The Grapes of Wrath by John Steinbeck",
        "Brave New World by Aldous Huxley",
        "Frankenstein by Mary Shelley",
        "The Picture of Dorian Gray by Oscar Wilde",
        "Jane Eyre by Charlotte Bronte",
        "The Odyssey by Homer",
        "The Count of Monte Cristo by Alexandre Dumas",
        "Wuthering Heights by Emily Bronte",
        "Dracula by Bram Stoker",
        "A Tale of Two Cities by Charles Dickens",
        "Les Misérables by Victor Hugo",
        "The Divine Comedy by Dante Alighieri",
        "Gone with the Wind by Margaret Mitchell",
        "Alice's Adventures in Wonderland by Lewis Carroll",
        "The Canterbury Tales by Geoffrey Chaucer",
        "Don Quixote by Miguel de Cervantes",
        "The Iliad by Homer",
        "Ulysses by James Joyce",
        "Slaughterhouse-Five by Kurt Vonnegut",
        "The Bell Jar by Sylvia Plath",
        "Beloved by Toni Morrison",
        "The Hitchhiker's Guide to the Galaxy by Douglas Adams",
        "A Clockwork Orange by Anthony Burgess",
        "Catch-22 by Joseph Heller",
        "The Sun Also Rises by Ernest Hemingway",
        "The Sound and the Fury by William Faulkner",
        "The Stranger by Albert Camus",
        "The Old Man and the Sea by Ernest Hemingway",
        "The Road by Cormac McCarthy",
        "Infinite Jest by David Foster Wallace",
        "East of Eden by John Steinbeck",
        "The Shining by Stephen King",
        "The Name of the Wind by Patrick Rothfuss",
        "The Stand by Stephen King",
        "Dune by Frank Herbert"
    ];
    const [data, setData] = useState<string[]>();
    const [pageNo, setPageNo] = useState<number>(1);
    let pageSize = 5;
    let n = books.length;
    let totalPages = n/pageSize;

    useEffect(()=> {
        // async // then catch
        setStatus(Status.LOADING);
        fetchData(pageNo).then((response)=> {
            console.log(response);
            setStatus(Status.LOADED);
            setData(response);
        })
    },[pageNo]);

    // status -> LOADING, LOADED, REJECTED
    const [status, setStatus] = useState<Status>(Status.LOADING);
    const fetchData = (pageNo:number) => {
        // mocking api
        // this will call api ( take few seconds ) and eventually return data
        const pr = new Promise<string[]>((resolve, reject) => {  // pending fulfilled reject
            let st = (pageNo-1)*pageSize; // pageNo-5 (5-1)*5 -> 20
            let end = st+pageSize-1;
            setTimeout(() => {
                resolve(books.slice(st, end+1));
            }, 1500);
        });
        return pr;
    }

    return <>
        <button onClick={() => setPageNo((prev:number) => prev>1? prev-1: prev)}>prev</button>
        <span>&nbsp;&nbsp;{pageNo}&nbsp;&nbsp;</span>
        <button onClick={() => setPageNo((prev:number) => prev<totalPages?prev+1: prev)}>next</button>
        <div>
            {
                status == Status.LOADING? "Loading" :
                data?.map((book, index) => {
                    return <p key={index}>{book}</p>
                })
            }
        </div>
    </>
}

export default PaginExmple2;
// button -- prev
// button -- next
// list of values (5)
// data - paginated book list
// pageNo - page no