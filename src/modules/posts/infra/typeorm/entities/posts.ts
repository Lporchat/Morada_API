import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";

@Entity("posts")
class Posts {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  body: string;

  @Column()
  likes: number;

  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }
}

export { Posts };
