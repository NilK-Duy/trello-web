import axios from 'axios'
import { API_ROOT } from '~/utils/constants'

/**
 * Giải pháp Clean Code gọn gàng đó là chúng ta sẽ catch lỗi tập trung tại một nơi bằng cách tận dụng một thứ cực mạnh mẽ trong axios đó là Interceptors.
 * Interceptors cho phép chúng ta can thiệp vào quá trình gửi và nhận dữ liệu của axios để xử lý logic mà ta muốn.
*/
export const fetchBoardDetailsAPI = async (boardId) => {
  const response = await axios.get(`${API_ROOT}/v1/boards/${boardId}`)
  // Lưu ý: axios sẽ trả kết quả về qua property của nó là data
  return response.data
}
