<?php

namespace App\Http\Middleware;

use Closure;

class AllowOnlySpecificIP
{
    public function handle($request, Closure $next)
    {
        $allowedIP = ['192.168.1.100', '127.0.0.1'];
        $requestIP = $request->ip();

        if (!in_array($requestIP, $allowedIP)) {
            return abort(401);
        }

        return $next($request);
    }
}
