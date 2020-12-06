import "antd/dist/antd.css";
import { Card, Avatar } from "antd";
const { Meta } = Card;

export  function Posts({title, description, date}) {
    //this is the code for post component
    return (
        <div>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[]}
          >
            <section>
              <Meta title={title} description={description} />
              <span className="text-sm">{date}</span>

            </section>
          </Card>
        </div>
      )
}