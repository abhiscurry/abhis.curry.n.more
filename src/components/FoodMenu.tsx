import { Card, Col, Container, Row } from "react-bootstrap";
import styles from "./FoodMenu.module.scss";
import { type MenuCategory } from "../data/foodItemsDataType";
import fooditemsData from "../data/fooditems";
const FoodMenu = () => {
  const menuItems: MenuCategory[] = fooditemsData;
  return (
    <div className={` ${styles.customBackground} `}>
      <Container className="py-4">
        {menuItems.map((category) => (
          <div key={category.id}>
            <h2 className={`${styles.category} mt-4`}>{category.title}</h2>
            <Row xs={1} md={1} className="g-4">
              {category.items.map((item) => (
                <Col key={item.id}>
                  <Card className={styles.cardContainer}>
                    <Card.Img
                      variant="top"
                      src="https://placehold.co/381x221"
                      className={styles.cardImage}
                    />
                    <Card.Body className={styles.cardBody}>
                      <div>
                        <Card.Title>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                            className="mx-2"
                          >
                            <div className={styles.itemTitle}>{item.title}</div>
                            <div className={styles.itemPrice}>
                              ${item.price}
                            </div>
                          </div>
                        </Card.Title>
                        <hr></hr>
                        <Card.Text>{item.description}</Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default FoodMenu;
