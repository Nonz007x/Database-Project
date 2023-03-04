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
                <GitHubIcon />
                ท์นน
              </Link>
            </li>
            <li>
              <Link className="footerLink" href="https://github.com/FuseSN2003">
                <GitHubIcon />
                ส์ฟิว
              </Link>
            </li>
            <li>
              <Link className="footerLink" href="https://github.com/SWitsarut">
                <GitHubIcon />
                อเสื
              </Link>
            </li>
            <li>
              <Link
                className="footerLink"
                href="https://github.com/Kuromorimine"
              >
                <GitHubIcon />
                เบสห์
              </Link>
            </li>
            <li>
              <Link className="footerLink" href="https://github.com/8ReTid8">
                <GitHubIcon />
                นูป
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
