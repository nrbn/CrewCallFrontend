import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
var HttpErrorInterceptor = /** @class */ (function () {
    function HttpErrorInterceptor() {
    }
    HttpErrorInterceptor.prototype.intercept = function (request, next) {
        return next.handle(request)
            .pipe(retry(1), catchError(function (error) {
            var errorMessage = '';
            if (error.error instanceof ErrorEvent) {
                // client-side error
                errorMessage = "Error: " + error.error.message;
            }
            else {
                // server-side error
                errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
            }
            // window.alert(errorMessage);
            if (error.status === 200) {
                window.location.href = '../../login';
            }
            return throwError(error);
        }));
    };
    return HttpErrorInterceptor;
}());
export { HttpErrorInterceptor };
//# sourceMappingURL=http-error.interceptor.js.map