import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
    return (
        <>
        <div className="FooterParent">
            <div className="FooterChild">
                <h3>ติดต่อเรา</h3>
                <ul>
                    <li>
                        <Link className="footerLink" href="https://github.com/Nonz007x">
                            <div className="icon-link">
                                <GitHubIcon />
                            </div>
                            <div className="name-link">
                                <p>ท์นน</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link className="footerLink" href="https://github.com/FuseSN2003">
                            <div className="icon-link">
                                    <GitHubIcon />
                            </div>
                            <div className="name-link">
                                <p>ส์ฟิว</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link className="footerLink" href="https://github.com/SWitsarut">
                            <div className="icon-link">
                                    <GitHubIcon />
                            </div>
                            <div className="name-link">
                                <p>อเสื</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link className="footerLink" href="https://github.com/Kuromorimine">
                            <div className="icon-link">
                                    <GitHubIcon />
                            </div>
                            <div className="name-link">
                                <p>อเสื</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
}
