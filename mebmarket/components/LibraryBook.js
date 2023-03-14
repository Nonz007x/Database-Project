import Link from "next/link";
export default function LibraryBook(props) {
    const { property } = props;
    return (
        <>
            <Link href={property.cover} target="_blank">
                <div className="library-item-wrap">
                    <div className="library-book-image-wrap">
                        <img
                            className="library-book-image"
                            src={property.cover}
                        />
                    </div>
                    <div className="name-and-author">
                        <h5>{property.bookname}</h5>
                        <h6>{property.author}</h6>
                    </div>
                </div>
            </Link>
        </>
    );
}
