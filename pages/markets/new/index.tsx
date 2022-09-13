import { useAuth } from "../../../src/commons/hooks/useAuth";
import ItemNew from "../../../src/units/item/new/ItemNew.container";

export default function ItemNewPage() {
  useAuth();

  return <ItemNew isEdit={false} fetchData={undefined}></ItemNew>;
}
