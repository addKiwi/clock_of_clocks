import './style.css'

interface Props {
  status: boolean;
}

export const MenuWindow:React.FC<Props> = ({status}) => {
  return (
    <div className="menu-window">
      <form action="">
        <label>
          Hands color:
          <input type="color" />
        </label>
        <label>
          Little watch border color:
          <input type="color" />
        </label>
        Type:
        <label>
          <input type="radio" name='type' /> Horizontal
        </label>
        <label>
          <input type="radio" name='type' /> Vertical
        </label>
      </form>
      MenuWindow
    </div>
  );
};