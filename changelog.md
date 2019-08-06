## 1
1.1. Установлен Angular-CLI.

1.2. Создан проект, В package.json для команды start добавьте флаг -o,

1.3. Создан модуль ProductsModule, Создан ProductComponent 

1.4 Добавлены свойства для компонента ProductComponent, категории реализованы через enum

1.5 Добавлена кнопка Buy, реализованно обработчик события клик onBuy()

1.6 Создан сервис ProductsService который возвращает товары (пока берет товары из mocks), Модель товара описана интерфейсом и классом, 
    Создан компонент ProductListComponent в нем использован ProductsService, данные отображены на странце с помощью *ngFor 

1.7 Создан компонент  CartListComponent отображающий список купленных товаров,
  *ngIf + else для отображения корзины (CartListComponent), если она не пустая.
   Если корзина пустая отображать другой альтернативный блок с сообщением о пустой корзине.

1.8. Применены встроенные пайпы uppercase, currency.

1.9 Создан сервис local-storage.service для хранения покупок в LocalStorage 

1.10 Добавлена кнопка очистки корзины onClearCart и удаления товара onDeleteItem

## 2
2.1. Созданная функциональность разделена на модули AppModule, CartModule, ProductsModule, OrdersModule, CoreModule, SharedModule.

2.2 Реализован Routing между компонентами

2.3 Добавлен ProductDetailsComponent отображащий страницу подробного описания товара

2.4 Обновлены "@angular/core": "~8.2.0-next.0", "@angular/cli": "~8.1.0",   "rxjs": "~6.5.2",

2.5 исправлены ошибки ng lint

2.6 Добавлен модуль AdminModul, компоненты Admin, ManageProducts, ManageOrders, AdminDashboard

2.6 Добавлен canActivate Guard AuthGuard

2.7 Добавлен Auth Service

2.8 Добавлен компонент Login

2.8 Добавлен canActivateChild в AuthGuard и AdminRoutes

2.9 Если товара нету в наличии кнопка купить недоступна


## 3
3.1 Исправлен сервис LocalStorageService

3.2 Переписал CartService и CartModel, список товаров, общее количество и общая сумма теперь хранятся в одном объекте cart он передается как BehaviorSubject и на него уже       подписываются компоненты CartListComponent и AppComponent

3.3 Обновлены компоненты CartListComponent и AppComponent

###### NEW ######

3.4 Для компонентов ProductComponent и CartItemComponent установлена стратегия ChangeDetectionStrategy.OnPush

3.5 добавлен unsubscribe для CartListComponent, использовал Lifecycle Hooks ngOnDestroy 

3.6 добавлен <h1 #appTitle></h1> с шаблонной переменной, использовал @ViewChild чтобы получить доступ к DOM элементу темплейта и установить заголовок для приложения из класса (пропущенный пункт из hw_2)

3.7 создана директива HighlightDirective которая меняет фон при наведении на товар в корзине, директива зарегистрирована в SharedModule
   использован @HostListener декоратор

3.8  Модифицированы компоненты CartItemComponent, CartListComponent и сервис CartService добавлена возможность увеличить/уменьшить количество для указаного товара


## 4

4.1 Применены встроенные пайпы: <br> 
   - для форматирования цены (| currency:'USD') в CartListComponent, ProductComponent, ProductDetailsComponent<br>
   - для форматирования категории и названия товара в верхний регистр (| uppercase) в CartListComponent, ProductComponent, ProductDetailsComponent<br>
   - для форматирования даты (| date:'medium') в CartListComponent, ProductComponent, ProductDetailsComponent

4.2 Изменить метод getProducts() сервиса ProductService так, чтобы он возвращал observable.<br> 
   применил async пайп для отображения данных, предоставленных сервисом ProductService на странице.

4.2.2 Добавил public свойство cartCannel$ в CartService передающее cartSubject как Observable, применил async пайп для отображения данных в smallCart$ AppComponent 