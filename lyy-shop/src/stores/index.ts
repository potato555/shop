//创建一个存储登录用户信息的store
export const useLoginUserStore = defineStore('loginUser', {
  state: () => {
    return {
      loginUser: useLocalStorage<LoginUser>('loginUser', {}),
    }
  },

  getters: {
    isLogin: (state) => {
      return 'token' in state.loginUser && 'user' in state.loginUser
    },
  },

  actions: {
    login(loginUser: LoginUser) {
      this.loginUser = loginUser
    },
    logout() {
      this.loginUser = {}
    },
  },
})

//创建一个存储Notification的strore
export const useNotificationStore = defineStore('notification', {
  state: () => {
    return {
      items: [] as Notice[], // 通知
    }
  },

  actions: {
    addNotice(notice: Notice) {
      this.items.push(notice)
      setTimeout(
        () => {
          this.removeNotice(notice.id)
        },
        notice.duration ? notice.duration : 3000,
      )
    },

    removeNotice(id: number) {
      this.items = this.items.filter((item) => item.id !== id)
    },
  },
})

export const useCartStore = defineStore('cart', {
  state: () => {
    /* 
      {
        items:CartItem[]
        totalCount:number
        totalPrice:number
      }
    */
    return {
      items: useLocalStorage<CartItem[]>('cart', []),
    }
  },

  getters: {
    totalCount: (state) => {
      return state.items.reduce((a, b) => a + b.count, 0)
    },

    totalPrice: (state) => {
      return state.items.reduce((a, b) => a + b.price * b.count, 0)
    },
  },

  actions: {
    // 添加商品
    addItems(product: Product, count: number) {
      if (count <= 0) return
      // 从购物车中查询商品
      const cartItem = this.items.find((item) => item.id === product.id)

      if (cartItem) {
        const newCount = cartItem.count + count
        if (newCount <= cartItem.stock) {
          cartItem.count = newCount
        } else {
          cartItem.count = cartItem.stock
        }
      } else {
        count = count <= product.stock ? count : product.stock
        this.items.push({ ...product, count })
      }
    },

    // 删除商品
    removeItems(id: number) {
      this.items = this.items.filter((item) => item.id !== id)
    },

    // 清空购物车
    clearCart() {
      this.items = []
    },
  },
})
