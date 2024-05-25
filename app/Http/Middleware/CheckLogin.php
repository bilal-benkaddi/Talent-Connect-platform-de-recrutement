<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CheckLogin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle($request, Closure $next): Response
    {
        $guards = ["web","candidat","candidat"];
        foreach ($guards as $guard) {
            if (Auth::guard($guard)->check()) {
                return redirect()->back();
            }
        }

        return $next($request);
    }
}
