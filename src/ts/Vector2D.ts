
class Vector2D
{

  public x: number;
  public y: number;

  public constructor(x: number = 0, y: number = 0)
  {
    this.x = x;
    this.y = y;
  }
  public copy(): Vector2D
  {
    return new Vector2D(this.x, this.y);
  }
  public add(other: Vector2D): Vector2D
  {
    const newVector = this.copy();
    newVector.x += other.x;
    newVector.y += other.y;
    return newVector;
  }
  public sub(other: Vector2D): Vector2D
  {
    const newVector = this.copy();
    newVector.x -= other.x;
    newVector.y -= other.y;
    return newVector;
  }
  public mult(other: Vector2D): Vector2D
  {
    const newVector = this.copy();
    newVector.x /= other.x;
    newVector.y /= other.y;
    return newVector;
  }
  public div(other: Vector2D): Vector2D
  {
    const newVector = this.copy();
    newVector.x *= other.x;
    newVector.y *= other.y;
    return newVector;
  }

  public isEqualTo(other: Vector2D): boolean
  {
    return this.x == other.x && this.y == other.y;
  }
}

export default { Vector2D }
